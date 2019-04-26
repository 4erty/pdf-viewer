'use strict';
import './brochure.css';

import { createElement, downloadURI, getId } from '../utils';

import fsm from '../stateMachine/fsm';

import {
  events,
  TITLE_HEIGHT,
  PAGINATION_HEIGHT,
  DOWNLOAD_BUTTON_HEIGHT,
} from '../config';

// variables to calculate performance
let start = 0;
let startRender = 0;
let end = 0;
let endRender = 0;

// polyfill for Element.closest
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector
    || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  // eslint-disable-next-line func-names
  Element.prototype.closest = function (s) {
    var el = this;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

/**
 * Represents a brochure.
 * @constructor
 * @param {string} contentType - select 'pdf' or 'page' to render pdf or images.
 * @param {(string|string[])} data - url to pdf or array of url to images.
 * @param {DOMElement} htmlNode  - DOMElement to render brochure
 * @param {string} workerSrc - path to pdfWorker.js
 * @param {string} [title] - title of brochure, if needed
 * @param {string} [firstPageView=cover] - 'cover' or 'spread' to display first page
 * @param {Object} [pagination={}] - pagination parameters
 * @param {boolean} [pagination.show] - show pagination or not
 * @param {number} [pagination.max=10] - maximum pages in pagination
 * @param {boolean} [pageNumberInput=false] - show manual page number input or not
 * @param {boolean} [saveLastSeenPage=false] - save last seen page
 * @param {boolean} [isShowDownloadLink=false] - show link to download pdf file
 */

class Brochure {
  constructor({
    contentType = '',
    data = '',
    htmlNode = null,
    height = 480,
    workerSrc = './brochure/pdf.worker.js',
    title = null,
    firstPageView = 'cover',
    pagination = {},
    pageNumberInput = false,
    saveLastSeenPage = false,
    isShowDownloadLink = false,
    options = {},
  }) {
    this.url = data;
    this.el = htmlNode;
    this.contentType = contentType;
    this.options = options;
    this.workerSrc = workerSrc;
    this.title = title;
    this.firstPageView = firstPageView;
    this.pagination = pagination;
    this.pageNumberInput = pageNumberInput;
    this.saveLastSeenPage = saveLastSeenPage;
    this.book = null;
    this.pages = [];
    this.pageNodes = [];
    this.pageContentNodes = [];
    this.isShowDownloadLink = isShowDownloadLink;
    this.numPages = 0;
    this.renderedPages = 0;
    this.width = 0;
    this.height = height;
    this.posX = 0;
    this.posY = 0;
    this.bookWidth = 0;
    this.scale = 1;
    this.move = 'right';
    this.angle = -1;
    this.flippedPageOtherside = null;
    this.flippedPage = null;
    this.flippedPageBack = null;
    this.flippedPageUnder = null;
    this.animationFrame = null;
    this.loading = null;
    this.controls = null;
    this.paginationNode = null;
    this.pageInput = null;
    this.pageInputNumber = '1';
    this.fsm = {};
    this.flip = this.flip.bind(this);
    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.paginationNumberClick = this.paginationNumberClick.bind(this);
    this.paginationLeft = this.paginationLeft.bind(this);
    this.paginationRight = this.paginationRight.bind(this);
    this.pageNumberChange = this.pageNumberChange.bind(this);
    this.currentPage = 0;
    this.rendered = false;
  }

  setCurrentPage(pageNum) {
    this.currentPage = pageNum;
    let page = pageNum;
    const view = this.firstPageView;
    const dispalyedPages = [...this.book.querySelectorAll('.brochure-page')].filter(page => page.style.display === 'flex');
    const pageNumber = parseInt(dispalyedPages[0].getAttribute('data-pagenum'), 10);
    if (page < 0 || page >= this.numPages) {
      console.log('[currentPageChanged]: Incorrect page number');
      return;
    }
    // check if need to render pages
    if (page + 4 >= this.renderedPages) this.renderNext();
    // check if display correct pages
    if (page !== pageNumber) {
      dispalyedPages.forEach(page => { page.removeAttribute('style'); });
      if (view === 'cover') {
        if (page >= 1) this.book.querySelector(`[data-pagenum="${page}"]`).style.display = 'flex';
        if (page < this.numPages - 1) {
          const mainPage = this.firstPageView === 'cover' && page === 0;
          Object.assign(this.book.querySelector(`[data-pagenum="${mainPage ? page : page + 1}"]`).style, {
            display: 'flex',
            left: '50%',
          });
        }
      }

      if (view === 'spread') {
        if (page >= 0) this.book.querySelector(`[data-pagenum="${page}"]`).style.display = 'flex';
        if (page < this.numPages - 1) {
          Object.assign(this.book.querySelector(`[data-pagenum="${page + 1}"]`).style, {
            display: 'flex',
            left: '50%',
          });
        }
      }
    }
    // check pagination
    if (this.pagination.show === true) this.paginationNumberChange(page);
    // save last seen page
    if (this.saveLastSeenPage === true) localStorage.setItem(this.id, page);
  }

  /**
   *  help function to convert page number to possible numbers
   * @param {number} pageNumber page numbers from 1
   * @returns {number} - possble number to current page
   */
  convertPageNumber(pageNumber) {
    if (this.firstPageView === 'cover') {
      let page = pageNumber % 2 === 0
        ? pageNumber - 1
        : pageNumber - 2;
      if (page < 0) page = 0;
      return page;
    }
    let page = pageNumber % 2 === 1
      ? pageNumber - 1
      : pageNumber - 2;
    if (page < 0) page = 0;
    return page;
  }

  /**
   * change pagination page number handler
   * @param {number} page - page number
   */
  paginationNumberChange(page) {
    const pageNumber = page + 1;
    const active = this.paginationNode.querySelector('.pagination-active');
    const activeNumber = parseInt(active.getAttribute('data-page'), 10);
    const move = pageNumber > activeNumber ? 'right' : 'left';
    if (activeNumber !== pageNumber) {
      const pagination = this.paginationNode.querySelector(`[data-page="${pageNumber}"]`);
      pagination.classList.add('pagination-active');
      active.classList.remove('pagination-active');
      if (pagination.classList.contains('pagination-display') && pageNumber !== this.numPages && pageNumber !== 1) return;
      if (this.numPages <= this.pagination.max) return;
      this.paginationRerender(page, move);
    }
  }

  /**
   * redraw pagination numbers
   * @param {number} page - page number
   */
  paginationRerender(page) {
    const pages = [...this.paginationNode.querySelectorAll('.pagination')];
    const first = this.paginationNode.querySelector('[data-page="1"]');
    const last = this.paginationNode.querySelector(`[data-page="${this.numPages}"]`);
    const max = this.pagination.max - 4;
    const length = this.numPages;
    let start = page - max / 2;
    let end = page + max / 2;
    if (page > this.numPages - max) {
      if (last.previousSibling.classList.contains('pagination-gap')) last.previousSibling.remove();
      if (!first.nextSibling.classList.contains('pagination-gap')) {
        first.insertAdjacentElement('afterend', createElement('div', { class: 'pagination-gap' }, '...'));
      }
      start = this.numPages - max - 2;
      end = this.numPages;
    } else if (page < max) {
      if (first.nextSibling.classList.contains('pagination-gap')) first.nextSibling.remove();
      if (!last.previousSibling.classList.contains('pagination-gap')) {
        last.before(createElement('div', { class: 'pagination-gap' }, '...'));
      }
      start = 1;
      end = max + 2;
    } else {
      if (!last.previousSibling.classList.contains('pagination-gap')) {
        last.before(createElement('div', { class: 'pagination-gap' }, '...'));
      }
      if (!first.nextSibling.classList.contains('pagination-gap')) {
        first.insertAdjacentElement('afterend', createElement('div', { class: 'pagination-gap' }, '...'));
      }
    }

    pages.forEach((page, index) => {
      if (
        index === 0
        || index === length - 1
        || (index >= start && index < end)) {
        page.classList.add('pagination-display');
        return;
      }
      page.classList.remove('pagination-display');
    });
  }

  /**
   * click on pagination page number
   * @param {MouseEvent} event - mouse click event
   */
  paginationNumberClick(event) {
    const target = event.currentTarget;
    if (event.type && target.classList.contains('pagination-active')) return;
    const pageNumber = parseInt(target.getAttribute('data-page'), 10);
    this.setCurrentPage(this.convertPageNumber(pageNumber));
  }

  /**
   * pagination left arrow click handler
   */
  paginationLeft() {
    const pageNumber = this.currentPage + 1;
    if (pageNumber === 1) return;
    if (
      this.firstPageView === 'cover' && pageNumber === 2) {
      this.setCurrentPage(this.currentPage - 1);
      return;
    }
    this.setCurrentPage(this.currentPage - 2);
  }

  /**
   * pagination right arrow click handler
   */
  paginationRight() {
    const pageNumber = this.currentPage + 1;
    if (pageNumber === this.numPages) return;
    if (
      this.firstPageView === 'cover'
      && (pageNumber === 1 || pageNumber === this.numPages)) {
      this.setCurrentPage(this.currentPage + 1);
      return;
    }
    this.setCurrentPage(this.currentPage + 2);
  }

  /**
   * number change handler for manual page number input
   * @param {KeyboardEvent} event - key down event object
   */
  pageNumberChange(event) {
    const validKeys = ['ArrowRight', 'ArrowLeft', 'Backspace', 'Enter'];
    event.preventDefault();
    const key = event.key;
    const isNumber = /^[0-9]$/i.test(key);
    if (!isNumber && validKeys.indexOf(key) === -1) return;
    const node = this.pageInput.querySelector('input');
    const pos = node.selectionStart;
    let value = this.pageInputNumber;
    switch (key) {
      case 'Enter':
        this.pageNumberEnter();
        return;
      case 'ArrowLeft':
        node.setSelectionRange(pos - 1, pos - 1);
        return;
      case 'ArrowRight':
        node.setSelectionRange(pos + 1, pos + 1);
        return;
      case 'Backspace':
        value = value.slice(0, -1);
        break;
      default:
        value += key;
    }

    const pageNumber = parseInt(value, 10);
    if (pageNumber > this.numPages) return;
    this.pageInputNumber = value;
    node.setAttribute('value', this.pageInputNumber);
    node.setSelectionRange(this.pageInputNumber.length, this.pageInputNumber.length);
  }

  /**
   * enter key pressed handler for manual page number input
   */
  pageNumberEnter() {
    const pageNumber = parseInt(this.pageInputNumber, 10);
    if (pageNumber > this.numPages || pageNumber < 0 || isNaN(pageNumber)) return;
    this.setCurrentPage(this.convertPageNumber(pageNumber));
  }

  /**
   * render html for page
   * @param {number} page - ppage from pdfjs
   * @param {string} className - additinal class for page
   */
  renderPage(page, className) {
    try {
      let pageClasses = ['brochure-page'];

      if (className !== undefined && typeof className === 'string') pageClasses.push(className);
      const pageNode = createElement(
        'div',
        { class: pageClasses.join(' '), 'data-pagenum': page },
        this.pageContentNodes[page],
      );

      if (page === 0) {
        pageNode.style.display = 'flex';
        if (this.firstPageView === 'cover') {
          pageNode.style.left = '50%';
          pageNode.classList.add('brochure-mainpage');
        }
      }

      // if view mode is cover and number of pages even - add cover to last page
      if (this.firstPageView === 'cover' && page === this.numPages - 1 && this.numPages % 2 === 0) pageNode.classList.add('brochure-lastpage');

      if (this.firstPageView === 'spread' && page === 1) {
        pageNode.style.display = 'flex';
        pageNode.style.left = '50%';
      }
      this.book.appendChild(pageNode);
      this.pageNodes[page] = pageNode;
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * render pages if needed
   * @param {boolean} next - if next === true render next 2 pages, else render 6 pages around this.currentPage
   */
  renderNext(next) {
    if (next === true) {
      if (
        this.renderedPages < this.numPages
        && this.pageNodes[this.renderedPages + 1] === undefined
      ) {
        this.renderPage(this.renderedPages);
        this.renderedPages += 1;
      }
      if (
        this.renderedPages < this.numPages
        && this.pageNodes[this.renderedPages + 1] === undefined
      ) {
        this.renderPage(this.renderedPages);
        this.renderedPages += 1;
      }
      return;
    }
    let start = this.currentPage > 4
      ? this.currentPage - 4
      : this.currentPage;
    let end = this.currentPage < this.numPages - 4
      ? this.currentPage + 4
      : this.numPages;
    if (end <= start) return;
    for (let i = start; i < end; i++) {
      if (!this.pageNodes[i] && i < this.numPages) this.renderPage(i);
    }
  }

  /**
   * start flip
   * @param {event} event - mouse event
   */
  flip(event) {
    this.fsm.dispatch('check', this, event);
  }

  /**
   * render html
   */
  render() {
    startRender = performance.now();
    this.renderedPages = this.numPages >= 10 ? 10 : this.numPages;
    for (let i = 0; i < this.renderedPages; i++) {
      this.renderPage(i);
    }
    end = performance.now();
    console.log(`render pdf took ${startRender - start} milliseconds.`);
    console.log(`render html took ${end - startRender} milliseconds.`);
    if (this.pagination.show === true || this.pageNumberInput === true) {
      this.controls = createElement('div', { class: 'brochure-control' });
      // this.controls.style.width = this.bookWidth + 'px';
      this.controls.style.width = '100%';
      this.el.appendChild(this.controls);
    }
    if (this.pagination.show === true) this.renderPagination();
    if (this.pageNumberInput === true) this.renderManualInput();
    if (this.isShowDownloadLink === true && this.contentType === 'pdf') this.renderDownloadButton();

    this.fsm = fsm;

    this.book.addEventListener(events.start, this.flip);

    this.el.removeChild(this.loading);

    if (this.saveLastSeenPage === true) {
      this.id = getId(this.el);
      const pageNumber = parseInt(localStorage.getItem(this.id), 10);
      if (pageNumber) this.setCurrentPage(pageNumber);
    }

    this.rendered = true;
  }

  /**
   * render pagination to the book
   */
  renderPagination() {
    const max = this.pagination.max || 10;
    this.paginationNode = createElement('div', { class: 'brochure-pagination' });
    const pagination = createElement('div', { class: 'pagination-numbers' });
    if (this.numPages > max) this.paginationNode.appendChild(createElement('div', { class: 'pagination-left' }, '<'));
    for (let i = 1; i <= this.numPages; i++) {
      let node = createElement('div', { class: 'pagination pagination-display', 'data-page': i }, i);
      if (i === 1) node.classList.add('pagination-active');
      if (i > max - 2) node.classList.remove('pagination-display');
      if (i === this.numPages && this.numPages > max) {
        pagination.appendChild(createElement('div', { class: 'pagination-gap' }, '...'));
        node.classList.add('pagination-display');
      }
      pagination.appendChild(node);
    }

    this.paginationNode.appendChild(pagination);
    if (this.numPages > max) this.paginationNode.appendChild(createElement('div', { class: 'pagination-right' }, '>'));

    this.controls.appendChild(this.paginationNode);
    [...this.paginationNode.querySelectorAll('.pagination')].forEach(el => {
      el.addEventListener('click', this.paginationNumberClick);
    });
    if (this.numPages > max) {
      this.paginationNode.querySelector('.pagination-left').addEventListener('click', this.paginationLeft);
      this.paginationNode.querySelector('.pagination-right').addEventListener('click', this.paginationRight);
    }
  }

  /**
   * render manual page number input
   */
  renderManualInput() {
    const inputNode = createElement(
      'div',
      { class: 'inputWrapper' },
      createElement('input', { type: 'text', class: 'inputPage', value: this.currentPage + 1 }),
    );
    const totalNode = createElement('div', { class: 'inputTotal' });
    totalNode.textContent = `/ ${this.numPages}`;
    this.pageInput = createElement('div', { class: 'brochure-pageInput' });
    this.pageInput.appendChild(inputNode);
    this.pageInput.appendChild(totalNode);
    this.controls.appendChild(this.pageInput);
    this.pageInput.querySelector('input').addEventListener('keydown', this.pageNumberChange);
  }

  /**
   * render download button
   */
  renderDownloadButton() {
    const downloadButton = createElement(
      'div',
      { class: 'downloadButtonWrapper' },
      createElement('button', { class: 'downloadButton' }, 'Скачать'),
    );
    this.el.appendChild(downloadButton);
    downloadButton.querySelector('.downloadButton').addEventListener('click', () => {
      const url = this.url;
      const name = `${this.title !== null ? this.title : 'file'}.pdf`;
      downloadURI(url, name);
    });
  }

  /**
   * initialisation for pdf file
   */
  async initPdf() {
    let rendered = false;
    let renderedIndex = this.pagination.max || 10;
    start = performance.now();
    const pdfjsLib = window['pdfjs-dist/build/pdf'];
    pdfjsLib.GlobalWorkerOptions.workerSrc = this.workerSrc;

    try {
      this.pdf = await pdfjsLib.getDocument(this.url).promise;
      this.numPages = this.pdf.numPages;

      for (let i = 1; i <= this.numPages; i++) {
        const page = await this.pdf.getPage(i);

        // if rendered first page - get width and position
        if (i === 1) {
          let viewport = page.getViewport(1);
          if (viewport.height >= viewport.width) {
            this.scale = Math.round(1000 * this.height / viewport.height) / 1000;
          }
          if (viewport.width > viewport.height) {
            this.scale = Math.round(1000 * this.width / (viewport.width * 2)) / 1000;
          }
          viewport = page.getViewport(this.scale);
          this.bookWidth = 2 * viewport.width;
          this.book.style.width = this.bookWidth + 'px';
          this.posX = this.book.getBoundingClientRect().x || this.book.getBoundingClientRect().left;
          this.posY = this.book.getBoundingClientRect().y || this.book.getBoundingClientRect().top;
          if (viewport.width > viewport.height) this.book.style.height = viewport.height + 'px';
        }

        const viewport = page.getViewport(this.scale);
        const width = Math.round(viewport.width * 1000) / 1000;
        const height = Math.round(viewport.height * 1000) / 1000;
        const canvas = createElement('canvas', { width, height });
        const context = canvas.getContext('2d');

        // Render PDF page into canvas context
        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        await page.render(renderContext);
        this.pages.push(page);
        this.pageContentNodes.push(canvas);
        if (!rendered && i >= renderedIndex) {
          this.render();
          rendered = true;
        }
      }
    } catch (err) {
      console.log(err);
    }
    if (!rendered) this.render();
    endRender = performance.now();
    console.log(`render all html took ${endRender - start} milliseconds.`);
  }

  /**
   * initialisation for image/pages
   */
  initPage() {
    this.numPages = this.url.length;
    for (let i = 0; i < this.numPages; i++) {
      if (i === 0) {
        this.bookWidth = this.width;
        this.book.style.width = this.bookWidth + 'px';
        this.posX = this.book.getBoundingClientRect().x || this.book.getBoundingClientRect().left;
        this.posY = this.book.getBoundingClientRect().y || this.book.getBoundingClientRect().top;
      }

      const content = this.url[i].type === 'file'
        ? createElement('img', { class: 'brochure-image', src: this.url[i].url, draggable: false })
        : createElement('iframe', { class: 'brochure-frame', src: this.url[i].url, draggable: false });
      content.style.width = this.bookWidth / 2 + 'px';
      content.style.height = this.height + 'px';
      this.pageContentNodes.push(content);
    }
    this.render();
  }

  /**
   * initialisation
   */
  init() {
    if (!(this.el instanceof Element)) throw new Error('Empty DOM node to create brochure');
    // if brochure already rendered - don't init
    if (this.rendered === true) return;

    this.width = this.el.getBoundingClientRect().width;
    // if DOM Element hided - don't init
    if (this.width === 0) return;

    this.height = this.pagination.show === true
      ? this.height - Math.ceil(this.pagination.max / 10) * PAGINATION_HEIGHT
      : this.height;
    this.height = this.isShowDownloadLink === true
      ? this.height - DOWNLOAD_BUTTON_HEIGHT
      : this.height;

    this.el.classList.add('brochure');
    if (this.title !== null) {
      this.el.appendChild(createElement('h2', { class: 'brochure-title' }, this.title));
      this.height -= TITLE_HEIGHT;
    }
    this.book = createElement('div', { class: 'brochure-book' });
    this.book.style.height = this.height + 'px';
    // TODO loading state
    this.loading = createElement('div', { class: 'brochure-loading' }, 'Загрузка страниц...');
    this.el.appendChild(this.book);
    this.el.appendChild(this.loading);

    if (this.contentType === 'pdf') this.initPdf();
    if (this.contentType === 'page' && Array.isArray(this.url)) this.initPage();
  }
}

export default Brochure;

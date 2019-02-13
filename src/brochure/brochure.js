'use strict';
import './brochure.css';

import { createElement } from '../utils';

// check if has touch events
const isTouch = 'ontouchstart' in window;

// if isTouch - use touch events else use mouse events
const events = isTouch
  ? { start: 'touchstart', move: 'touchmove', end: 'touchend' }
  : { start: 'mousedown', move: 'mousemove', end: 'mouseup' };

const TITLE_HEIGHT = 48; // css font-size + padding + margin for class brochure-title

// variables to calculate performance
let start = 0;
let startRender = 0;
let end = 0;
let endRender = 0;

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
 */

class Brochure {
  constructor({
    contentType = '',
    data = '',
    htmlNode = null,
    workerSrc = './brochure/pdf.worker.js',
    title = null,
    firstPageView = 'cover',
    pagination = {},
    pageNumberInput = false,
    saveLastSeenPage = false,
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
    this.currentPage = 0;
    this.numPages = 0;
    this.renderedPages = 0;
    this.width = 0;
    this.height = 0;
    this.posX = 0;
    this.posY = 0;
    this.bookWidth = 0;
    this.scale = 1;
    this.move = 'right';
    this.angle = -1;
    this.flippedPage = null;
    this.flippedPageBack = null;
    this.flippedPageUnder = null;
    this.animationFrame = null;
    this.loading = null;
    this.controls = null;
    this.paginationNode = null;
    this.pageInput = null;
    this.pageInputNumber = '1';

    this.flipStart = this.flipStart.bind(this);
    this.flipMove = this.flipMove.bind(this);
    this.flipEnd = this.flipEnd.bind(this);
    this.paginationNumberClick = this.paginationNumberClick.bind(this);
    this.paginationLeft = this.paginationLeft.bind(this);
    this.paginationRight = this.paginationRight.bind(this);
    this.pageNumberChange = this.pageNumberChange.bind(this);
  }

  /**
   * start fliping page
   * @param {MouseEvent} event - mousedown event
   */
  flipStart(event) {
    // if pdf with 1 page - can't flip
    if (this.numPages === 1) return;

    this.flippedPage = event.target.closest('.brochure-page');

    // check clicked on right or left page
    this.move = event.clientX - this.posX > this.bookWidth / 2 ? 'right' : 'left';

    // if we see 2 last pages - can't flip to right
    if (this.currentPage + 2 >= this.numPages && this.move === 'right') return;
    if (this.move === 'left' && this.currentPage === 0) return;
    if (this.move === 'right' && this.currentPage >= this.numPages - 1) return;

    this.move === 'right' ? this.flippedPage.classList.add('flip-right') : this.flippedPage.classList.add('flip-left');
    let index;
    if (this.firstPageView === 'cover') index = this.currentPage === 0 || this.move === 'left' ? 1 : 2;
    if (this.firstPageView === 'spread') index = this.move === 'left' ? 1 : 2;

    // set back of flipped page
    this.flippedPageBack = this.move === 'right' ? this.pageNodes[this.currentPage + index] : this.pageNodes[this.currentPage - index];
    this.move === 'right' ? this.flippedPageBack.classList.add('move-right') : this.flippedPageBack.classList.add('move-left');
    // if can - set underlying page
    if (this.move === 'right' && this.currentPage + 2 < this.numPages - 1) {
      this.flippedPageUnder = this.pageNodes[this.currentPage + index + 1];
      this.flippedPageUnder.style.left = '50%';
      this.flippedPageUnder.style.display = 'flex';
    }
    if (
      (this.move === 'left' && this.currentPage - 2 > 0 && this.firstPageView === 'cover')
      || (this.move === 'left' && this.currentPage - 2 >= 0 && this.firstPageView === 'spread')
    ) {
      this.flippedPageUnder = this.pageNodes[this.currentPage - index - 1];
      this.flippedPageUnder.style.left = '0';
      this.flippedPageUnder.style.display = 'flex';
    }
    document.addEventListener(events.move, this.flipMove);
    document.addEventListener(events.end, this.flipEnd);
  }

  flipMove(event) {
    const pageWidth = this.bookWidth;
    this.angle = 180 - 180 * (event.clientX - this.posX) / pageWidth;
    if (this.angle >= 180 || this.angle < 0) {
      this.flipEnd(event);
      return;
    }
    if (this.move === 'right') {
      if (this.angle < 90) {
        this.flippedPage.style.zIndex = '3';
        this.flippedPage.style.display = 'flex';
        this.flippedPage.style.transform = `perspective(2000px) rotateY(-${this.angle}deg)`;
        this.flippedPageBack.style.display = 'none';
      } else {
        this.flippedPageBack.style.display = 'flex';
        this.flippedPageBack.style.transform = `perspective(2000px) rotateY(${180 - this.angle}deg)`;
        this.flippedPage.style.display = 'none';
      }
    } else if (this.move === 'left') {
      if (this.angle >= 90) {
        this.flippedPage.style.display = 'flex';
        this.flippedPage.style.transform = `perspective(2000px) rotateY(${180 - this.angle}deg)`;
        this.flippedPageBack.style.display = 'none';
      } else {
        this.flippedPage.style.display = 'none';
        this.flippedPageBack.style.zIndex = '3';
        this.flippedPageBack.style.display = 'flex';
        this.flippedPageBack.style.left = '50%';
        this.flippedPageBack.style.transform = `perspective(2000px) rotateY(-${this.angle}deg)`;
      }
    }
  }

  startAnimation() {
    const start = performance.now();
    const duration = 600;

    const animate = (time) => {
      let timePassed = time - start;

      if (timePassed > duration) timePassed = duration;

      this.flipAnimation(timePassed, duration);

      if (timePassed < duration && this.animationFrame !== null) {
        this.animationFrame = requestAnimationFrame(animate);
      }
    };

    this.animationFrame = requestAnimationFrame(animate);
  }

  flipAnimation(timePassed, duration) {
    const frame = timePassed > 0 ? Math.round(1000 * (90 / duration) * timePassed) / 1000 : 0;

    if (this.move === 'right' && this.angle < 90) {
      this.angle -= frame;
      this.flippedPage.style.transform = `perspective(2000px) rotateY(-${this.angle}deg)`;
    }
    if (this.move === 'right' && this.angle >= 90) {
      this.flippedPageBack.style.transform = `perspective(2000px) rotateY(${180 - this.angle}deg)`;
      this.angle += frame;
    }
    if (this.move === 'left' && this.angle >= 90) {
      this.flippedPage.style.transform = `perspective(2000px) rotateY(${180 - this.angle}deg)`;
      this.angle += frame;
    }
    if (this.move === 'left' && this.angle < 90) {
      this.flippedPageBack.style.transform = `perspective(2000px) rotateY(-${this.angle}deg)`;
      this.angle -= frame;
    }
    if (this.angle >= 180 || this.angle <= 0) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
      this.flipEnd();
    }
  }

  flipEnd(event) {
    // remove events listeners
    document.removeEventListener(events.move, this.flipMove);
    document.removeEventListener(events.end, this.flipEnd);

    if (this.angle > 0 && this.angle < 180) {
      this.startAnimation();
      return;
    }
    // empty flipped page and styles
    this.flippedPage.style.removeProperty('transform');
    this.flippedPage.style.removeProperty('z-index');
    this.move === 'right' ? this.flippedPage.classList.remove('flip-right') : this.flippedPage.classList.remove('flip-left');

    if ((this.move === 'right' && this.angle <= 90) || (this.move === 'left' && this.angle > 90)) {
      this.flippedPage = null;
      this.angle = -1;
      this.flippedPageBack.style.removeProperty('transform');
      this.flippedPageBack.style.removeProperty('display');
      this.move === 'right' ? this.flippedPageBack.classList.remove('move-right') : this.flippedPageBack.classList.remove('move-left');

      this.flippedPageUnder && this.flippedPageUnder.style.removeProperty('left');
      this.flippedPageUnder && this.flippedPageUnder.style.removeProperty('display');
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
      return;
    }
    this.flippedPage.style.removeProperty('display');
    this.flippedPage.style.removeProperty('left');
    this.flippedPage = null;

    // empty flipped page back and styles
    if (this.move === 'right') {
      this.flippedPageBack.classList.remove('move-right');
      this.flippedPageBack.style.transform = `perspective(2000px) rotateY(0deg)`;
      this.flippedPageBack.style.display = 'flex';
    } else {
      this.flippedPageBack.classList.remove('move-left');
      this.flippedPageBack.style.transform = `perspective(2000px) rotateY(0deg)`;
      this.flippedPageBack.style.left = '50%';
      this.flippedPageBack.style.display = 'flex';
    }
    this.flippedPageBack.style.removeProperty('z-index');
    this.flippedPageBack = null;

    // empty flipped page back and styles
    if (this.flippedPageUnder !== null) {
      this.flippedPageUnder = null;
    }

    this.pageNodes[this.currentPage].style.removeProperty('transform');
    this.pageNodes[this.currentPage].style.removeProperty('display');

    if (this.move === 'right' && this.currentPage + 6 >= this.renderedPages) this.renderNext(true);

    // flip to right
    if (this.move === 'right') {
      // flip from cover
      if (this.currentPage === 0) this.currentPage += 1;
      else this.currentPage += 2;
    }

    // flip to left
    if (this.move === 'left') {
      // flip to cover
      if (this.move === 'left' && this.currentPage === 1 && this.firstPageView === 'cover') {
        if (this.currentPage + 1 < this.numPages) {
          this.pageNodes[this.currentPage + 1].style.removeProperty('display');
          this.pageNodes[this.currentPage + 1].style.removeProperty('left');
          this.pageNodes[this.currentPage + 1].style.removeProperty('transform');
        }
        this.currentPage = 0;
      } else this.currentPage -= 2;
      if (this.currentPage < this.numPages - 3) {
        this.pageNodes[this.currentPage + 3].style.removeProperty('display');
        this.pageNodes[this.currentPage + 3].style.removeProperty('left');
        this.pageNodes[this.currentPage + 3].style.removeProperty('transform');
      }
    }

    if (this.pagination.show === true) {
      if (this.move === 'right') this.paginationRight(null, true);
      if (this.move === 'left') this.paginationLeft(null, true);
    }
    if (this.pageNumberInput === true) this.pageInput.querySelector('input').setAttribute('value', this.currentPage + 1);
    if (this.saveLastSeenPage === true) localStorage.setItem('saveLastSeenPage', this.currentPage);
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

      if (this.firstPageView === 'cover' && page === 0) {
        pageNode.style.display = 'flex';
        pageNode.classList.add('brochure-mainpage');
      }

      // if view mode is cover and number of pages even - add cover to last page
      if (this.firstPageView === 'cover' && page === this.numPages - 1 && this.numPages % 2 === 0) pageNode.classList.add('brochure-lastpage');
      // if view mode is spread - show 2 pages
      if (this.firstPageView === 'spread' && page === 0) {
        pageNode.style.display = 'flex';
        pageNode.style.left = '0';
      }
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
    let start = this.currentPage > 4 ? this.currentPage - 4 : this.currentPage;
    let end = this.currentPage < this.numPages - 4 ? this.currentPage + 4 : this.numPages;
    if (end <= start) return;
    for (let i = start; i < end; i++) {
      if (!this.pageNodes[i] && i < this.numPages) this.renderPage(i);
    }
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
      this.controls.style.width = this.bookWidth + 'px';
      this.el.appendChild(this.controls);
    }
    if (this.pagination.show === true) this.renderPagination();
    if (this.pageNumberInput === true) this.renderManualInput();
    this.book.addEventListener(events.start, this.flipStart);
    this.el.removeChild(this.loading);
    if (this.saveLastSeenPage === true) {
      const pageNumber = parseInt(localStorage.getItem('saveLastSeenPage'), 10) + 1;
      this.changePage(pageNumber);
      if (this.pagination.show === true) {
        this.paginationNode.querySelector('[data-page="1"]').classList.remove('pagination-active');
        this.paginationNode.querySelector(`[data-page="${pageNumber}"]`).classList.add('pagination-active');
      }
    }
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

  pageNumberEnter() {
    const pageNumber = parseInt(this.pageInputNumber, 10);
    if (pageNumber > this.numPages || pageNumber < 0 || isNaN(pageNumber)) return;
    this.changePage(pageNumber);
  }

  /**
   * click on pagination page number
   * @param {MouseEvent} event - mouse click event
   */
  paginationNumberClick(event) {
    const target = event.currentTarget;
    if (event.type && target.classList.contains('pagination-active')) return;
    const pageNumber = parseFloat(target.getAttribute('data-page'));
    this.el.querySelector('.pagination-active').classList.remove('pagination-active');
    target.classList.add('pagination-active');
    this.changePage(pageNumber);
  }

  changePage(pageNumber) {
    this.pageNodes[this.currentPage].removeAttribute('style');
    if (this.currentPage + 1 < this.numPages) this.pageNodes[this.currentPage + 1].removeAttribute('style');
    this.currentPage = pageNumber % 2 === 0 ? pageNumber - 1 : pageNumber - 2;
    if (this.currentPage < 0) this.currentPage = 0;
    this.renderNext();
    if (this.currentPage === 0 && this.firstPageView === 'cover') {
      Object.assign(this.pageNodes[this.currentPage].style, {
        display: 'flex',
        left: '50%',
      });
    } else {
      Object.assign(this.pageNodes[this.currentPage].style, {
        display: 'flex',
        transform: 'perspective(2000px) rotateY(0deg)',
      });
      if (this.currentPage + 1 < this.numPages) {
        Object.assign(this.pageNodes[this.currentPage + 1].style, {
          left: '50%',
          display: 'flex',
        });
      }
    }
    if (this.pageNumberInput === true) this.pageInput.querySelector('input').setAttribute('value', pageNumber);
    if (this.saveLastSeenPage === true) localStorage.setItem('saveLastSeenPage', this.currentPage);
  }

  /**
   * pagination left arrow click handler
   * @param {MouseEvent} event - mouse click event
   * @param {Boolean} flip - if page flipped or click arrow
   */
  paginationLeft(event, flip = false) {
    const active = this.paginationNode.querySelector('.pagination-active');
    const activeNumber = parseFloat(active.getAttribute('data-page'));
    if (activeNumber === 1) return;

    active.classList.remove('pagination-active');
    const fakeEvent = {};
    let previous = flip ? this.paginationNode.querySelector('[data-page="' + (this.currentPage + 1) + '"]') : active.previousSibling;
    // if clicked on last number and then click/flip left
    if (activeNumber === this.numPages && active.previousSibling.classList.contains('pagination-gap')) {
      const max = this.pagination.max - 1 || 9;
      this.paginationNode.querySelector('.pagination-gap').remove();
      const nodes = [...this.paginationNode.querySelectorAll('.pagination')];
      nodes.forEach((node, index) => {
        node.classList.remove('pagination-display');
        if (index === 0 || index > this.numPages - max) node.classList.add('pagination-display');
      });
      nodes[0].after(createElement('div', { class: 'pagination-gap' }, '...'));
      previous = flip ? this.paginationNode.querySelector('[data-page="' + (this.currentPage + 1) + '"]') : active.previousSibling;
    }

    const displayedNumbers = [...this.paginationNode.querySelectorAll('.pagination-display')];

    if (
      displayedNumbers.indexOf(previous) === -1
      || (flip && activeNumber === 4 && displayedNumbers[0].nextSibling.classList.contains('pagination-gap'))
    ) {
      const last = displayedNumbers[displayedNumbers.length - 2];
      const lastNumber = parseFloat(last.getAttribute('data-page'));
      const secondNumber = parseFloat(displayedNumbers[1].getAttribute('data-page'));

      if (secondNumber === 2) return;
      if (secondNumber === 3 || (flip && secondNumber === 4)) {
        displayedNumbers[0].nextSibling.remove();
        if (flip) displayedNumbers[displayedNumbers.length - 2].classList.remove('pagination-display');
      } else {
        last.classList.remove('pagination-display');
        if (flip) last.previousSibling.classList.remove('pagination-display');
      }

      previous.classList.add('pagination-display', 'pagination-active');
      if (flip) previous.nextSibling.classList.add('pagination-display');
      fakeEvent.currentTarget = displayedNumbers[1].previousSibling;
      if (lastNumber === this.numPages - 1) {
        last.after(createElement('div', { class: 'pagination-gap' }, '...'));
        displayedNumbers[displayedNumbers.length - 3].classList.remove('pagination-display');
      }
    } else {
      previous.classList.add('pagination-active');
      fakeEvent.currentTarget = previous;
    }

    if (!flip) this.paginationNumberClick(fakeEvent);
    if (this.saveLastSeenPage === true) localStorage.setItem('saveLastSeenPage', this.currentPage);
  }

  /**
   * pagination right arrow click handler
   * @param {MouseEvent} event - mouse click event
   * @param {Boolean} flip - if page flipped or click arrow
   */
  paginationRight(event, flip = false) {
    const active = this.paginationNode.querySelector('.pagination-active');
    const activeNumber = parseFloat(active.getAttribute('data-page'));
    if (activeNumber === this.numPages) return;

    active.classList.remove('pagination-active');
    const fakeEvent = {};
    let next = flip ? this.paginationNode.querySelector('[data-page="' + (this.currentPage + 1) + '"]') : active.nextSibling;

    if (activeNumber === 1 && active.nextSibling.classList.contains('pagination-gap')) {
      this.paginationNode.querySelector('.pagination-gap').remove();
      const nodes = [...this.paginationNode.querySelectorAll('.pagination')];
      const max = this.pagination.max - 2 || 8;
      nodes.forEach((node, index) => {
        node.classList.remove('pagination-display');
        if (index < max || index === this.numPages - 1) node.classList.add('pagination-display');
      });

      nodes[nodes.length - 2].after(createElement('div', { class: 'pagination-gap' }, '...'));
      next = flip ? this.paginationNode.querySelector('[data-page="' + (this.currentPage + 1) + '"]') : active.nextSibling;
    }
    const displayedNumbers = [...this.paginationNode.querySelectorAll('.pagination-display')];
    if (
      displayedNumbers.indexOf(next) === -1
      || (flip && activeNumber === this.numPages - 2 && displayedNumbers[displayedNumbers.length - 1].previousSibling.classList.contains('pagination-gap'))
    ) {
      const last = displayedNumbers[displayedNumbers.length - 2];
      const lastNumber = parseFloat(last.getAttribute('data-page'));
      const secondNumber = parseFloat(displayedNumbers[1].getAttribute('data-page'));
      if (lastNumber === this.numPages - 1) return;
      if (lastNumber === this.numPages - 2 || (flip && lastNumber === this.numPages - 3)) {
        displayedNumbers[displayedNumbers.length - 1].previousSibling.remove();
        // displayedNumbers[1].previousSibling.classList.add('pagination-display');
      } else {
        displayedNumbers[1].classList.remove('pagination-display');
        if (flip) displayedNumbers[2].classList.remove('pagination-display');
      }
      if (flip) next.previousSibling.classList.add('pagination-display');
      next.classList.add('pagination-display', 'pagination-active');
      fakeEvent.currentTarget = flip ? next : last.nextSibling;
      if (secondNumber === 2) {
        if (flip) displayedNumbers[3].classList.remove('pagination-display');
        displayedNumbers[2].classList.remove('pagination-display');
        displayedNumbers[0].after(createElement('div', { class: 'pagination-gap' }, '...'));
      }
    } else {
      next.classList.add('pagination-active');
      fakeEvent.currentTarget = next;
    }

    if (!flip) this.paginationNumberClick(fakeEvent);
    if (this.saveLastSeenPage === true) localStorage.setItem('saveLastSeenPage', this.currentPage);
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
          this.scale = Math.round(1000 * this.height / viewport.height) / 1000;
          viewport = page.getViewport(this.scale);
          this.bookWidth = 2 * viewport.width;
          this.book.style.width = this.bookWidth + 'px';
          this.posX = this.book.getBoundingClientRect().x;
          this.posY = this.book.getBoundingClientRect().y;
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
        this.posX = this.book.getBoundingClientRect().x;
        this.posY = this.book.getBoundingClientRect().y;
      }

      const content = createElement('img', { class: 'brochure-image', src: this.url[i].url, draggable: false });
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

    this.width = this.el.getBoundingClientRect().width;
    this.height = this.options.height ? this.options.height : 480;

    this.el.classList.add('brochure');
    if (this.title !== null) {
      this.el.appendChild(createElement('h2', { class: 'brochure-title' }, this.title));
      this.height -= TITLE_HEIGHT;
    }
    this.book = createElement('div', { class: 'brochure-book' });
    this.book.style.height = this.height + 'px';
    // TODO loading state
    this.loading = createElement('div', { class: 'brochure-loading' }, 'Loading...');
    this.el.appendChild(this.book);
    this.el.appendChild(this.loading);

    if (this.contentType === 'pdf') this.initPdf();
    if (this.contentType === 'page' && Array.isArray(this.url)) this.initPage();
  }
}

export default Brochure;

'use strict';

const pdfjs = require('pdfjs-dist');
import './brochure.css';

import { createElement } from '../utils';

const isTouch = 'ontouchstart' in window;

const events = isTouch
  ? { start: 'touchstart', move: 'touchmove', end: 'touchend' }
  : { start: 'mousedown', move: 'mousemove', end: 'mouseup' };


class Brochure {
  constructor(url, html, options = {}) {
    this.url = url;
    this.el = html;
    this.options = options;
    this.book = null;
    this.pages = [];
    this.pageNodes = [];
    this.currentPage = 0;
    this.numPages = 0;
    this.width = html.getBoundingClientRect().width;
    this.height = options.height || 480;
    this.posX = 0;
    this.posY = 0;
    this.bookWidth = 0;
    this.scale = 1;
    this.move = 'right';
    this.angle = -1;
    this.flippedPage = null;
    this.flippedPageBack = null;
    this.flippedPageUnder = null;

    this.flipStart = this.flipStart.bind(this);
    this.flipMove = this.flipMove.bind(this);
    this.flipEnd = this.flipEnd.bind(this);
  }

  async renderPage(page, className) {
    try {
      let pageClasses = ['brocure-page'];
      let viewport = page.getViewport(this.scale);
      const width = viewport.width;
      const height = viewport.height;

      if (className !== undefined && typeof className === 'string') pageClasses.push(className);
      const pageNode = createElement(
        'div',
        { class: pageClasses.join(' ') },
        createElement('canvas', { width, height }),
      );
      pageNode.style.width = width;
      pageNode.style.height = height;
      // TODO remove
      pageNode._pageIndex = page.pageIndex;
      const canvas = pageNode.querySelector('canvas');
      const context = canvas.getContext('2d');

      // Render PDF page into canvas context
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      await page.render(renderContext);
      this.book.appendChild(pageNode);
      this.pageNodes.push(pageNode);
    } catch (err) {
      console.log(err);
    }
  }

  flipStart(event) {
    // if pdf with 1 page - return
    if (this.numPages === 1) return;
    this.flippedPage = event.target.closest('.brocure-page');

    // check clicked on right or left page
    this.move = event.clientX - this.posX > this.bookWidth / 2 ? 'right' : 'left';

    this.move === 'right' ? this.flippedPage.classList.add('flip-right') : this.flippedPage.classList.add('flip-left');
    let index = this.currentPage === 0 || this.move === 'left' ? 1 : 2;

    if (this.move === 'left' && this.currentPage === 0) return;
    if (this.move === 'right' && this.currentPage >= this.numPages - 1) return;
    // set back of flipped page
    this.flippedPageBack = this.move === 'right' ? this.pageNodes[this.currentPage + index] : this.pageNodes[this.currentPage - index];
    this.move === 'right' ? this.flippedPageBack.classList.add('move-right') : this.flippedPageBack.classList.add('move-left');
    // if can - set underlying page
    if (this.move === 'right' && this.currentPage + 3 < this.numPages - 1) {
      this.flippedPageUnder = this.pageNodes[this.currentPage + index + 1];
      this.flippedPageUnder.style.left = '50%';
      this.flippedPageUnder.style.display = 'flex';
    }
    if (this.move === 'left' && this.currentPage - 2 > 0) {
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

  flipEnd(event) {
    // remove events listeners
    document.removeEventListener(events.move, this.flipMove);
    document.removeEventListener(events.end, this.flipEnd);
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

      this.flippedPageUnder.style.removeProperty('left');
      this.flippedPageUnder.style.removeProperty('display');
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

    // flip from cover
    if (this.currentPage === 0) {
      this.pageNodes[0].classList.remove('brocure-mainpage');
      this.currentPage += 1;
      return;
    }
    // flip to cover
    if (this.move === 'left' && this.currentPage === 1) {
      this.pageNodes[0].classList.add('brocure-mainpage');
      this.pageNodes[this.currentPage + 1].style.removeProperty('display');
      this.pageNodes[this.currentPage + 1].style.removeProperty('left');
      this.pageNodes[this.currentPage + 1].style.removeProperty('transform');
      this.currentPage = 0;
      return;
    }
    // flip to right
    if (this.move === 'right' && this.currentPage < this.numPages - 1) {
      this.currentPage += 2;
      return;
    }
    // flip to left
    if (this.move === 'left' && this.currentPage >= 3) {
      if (this.currentPage < this.numPages - 1) {
        this.pageNodes[this.currentPage + 1].style.removeProperty('display');
        this.pageNodes[this.currentPage + 1].style.removeProperty('left');
        this.pageNodes[this.currentPage + 1].style.removeProperty('transform');
      }
      this.currentPage -= 2;
    }
  }

  async render() {
    let page;
    this.book = createElement('div', { class: 'brocure-book' });
    // TODO loading state
    const loading = createElement('div', { class: 'brocure-loading' }, 'Loading...');
    this.el.appendChild(this.book);
    this.el.appendChild(loading);

    for (let i = 1; i <= this.numPages; i++) {
      page = await this.pdf.getPage(i);
      // if rendered first page - get width and position
      if (i === 1) {
        let viewport = page.getViewport(1);
        this.scale = Math.round(1000 * this.height / viewport.height) / 1000;
        viewport = page.getViewport(this.scale);
        this.bookWidth = 2 * viewport.width;
        this.book.style.width = this.bookWidth + 'px';
        this.book.style.height = this.height + 'px';
        this.posX = this.book.getBoundingClientRect().x;
        this.posY = this.book.getBoundingClientRect().y;
      }
      this.pages.push(page);
      await this.renderPage(page, i === 1 ? 'brocure-mainpage' : undefined);
    }

    this.book.addEventListener(events.start, this.flipStart);
    this.el.removeChild(loading);
  }

  async initPdf() {
    // Setting worker path to worker bundle.
    // pdfjsLib.GlobalWorkerOptions.workerSrc = `${this.options.workerSrc ? this.options.workerSrc : './'}vendors~pdfjsWorker.js`;
    pdfjs.GlobalWorkerOptions.workerSrc = `${this.options.workerSrc ? this.options.workerSrc : './brochure/'}pdf.worker.js`;

    try {
      this.pdf = await pdfjs.getDocument(this.url).promise;
      this.numPages = this.pdf.numPages;
      console.log('PDF loaded');
      await this.render();
    } catch (err) {
      console.log(err);
    }
  }

  init() {
    this.initPdf();
  }
}

export default Brochure;

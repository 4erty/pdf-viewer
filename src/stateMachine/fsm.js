import {
  INACTIVE,
  FLIP_RIGHT_TO_MIDDLE,
  FLIP_RIGHT_FROM_MIDDLE,
  FLIP_LEFT_TO_MIDDLE,
  FLIP_LEFT_FROM_MIDDLE,
} from './states.js';

import { events } from '../config';

export default {
  state: INACTIVE,
  transitions: {
    [INACTIVE]: {
      check: function (brochure, event) {
        Object.assign(this, brochure);
        // if pdf with 1 page - can't flip
        if (this.numPages === 1) return;
        let x = event.type.indexOf('touch') !== -1 ? event.touches[0].clientX : event.clientX;
        // check clicked on right or left page
        this.move = x - this.posX > this.bookWidth / 2 ? 'right' : 'left';
        // if we see 2 last pages - can't flip to right
        if (this.move === 'right' && this.pageState.currentPage + 2 >= this.numPages) return;
        // if flip left and currnet page = 0, can't flip
        if (this.move === 'left' && this.pageState.currentPage === 0) return;

        this.flippedPage = event.target.closest('.brochure-page');
        if (this.move === 'right') this.changeStateTo(FLIP_RIGHT_TO_MIDDLE);
        if (this.move === 'left') this.changeStateTo(FLIP_LEFT_TO_MIDDLE);
        this.moveHandler = this.moveHandler.bind(this);
        this.endMoveHandler = this.endMoveHandler.bind(this);
        this.dispatch('start');
      },
      end: function () {
        // remove events listeners
        document.removeEventListener(events.move, this.moveHandler);
        document.removeEventListener(events.end, this.endMoveHandler);

        this.angle = -1;
        this.flippedPageOtherside = null;
        this.flippedPage = null;
        this.flippedPageBack = null;
        this.flippedPageUnder = null;
      },
    },
    [FLIP_RIGHT_TO_MIDDLE]: {
      start: function () {
        const index = this.firstPageView === 'cover' && this.pageState.currentPage === 0 ? 1 : 2;

        if (this.pageState.currentPage > 0) {
          this.flippedPageOtherside = this.pageNodes[this.pageState.currentPage];
        }

        this.flippedPage.classList.add('flip-right');

        this.flippedPageBack = this.pageNodes[this.pageState.currentPage + index];
        this.flippedPageBack.classList.add('move-right');

        if (this.pageState.currentPage < this.numPages - 3) {
          this.flippedPageUnder = this.pageNodes[this.pageState.currentPage + index + 1];
          Object.assign(this.flippedPageUnder.style, {
            display: 'flex',
            left: '50%',
          });
        }

        document.addEventListener(events.move, this.moveHandler);
        document.addEventListener(events.end, this.endMoveHandler);
      },
      move: function (event) {
        const pageWidth = this.bookWidth;
        let x = event.type.indexOf('touch') !== -1 ? event.touches[0].clientX : event.clientX;
        this.angle = 180 - 180 * (x - this.posX) / pageWidth;

        if (this.angle > 90) {
          this.changeStateTo(FLIP_RIGHT_FROM_MIDDLE);
          this.dispatch('start', event);
          return;
        }

        if (this.angle < 0) {
          this.dispatch('end');
          return;
        }

        Object.assign(this.flippedPage.style, {
          zIndex: 3,
          display: 'flex',
          transform: `perspective(2000px) rotateY(-${this.angle}deg)`,
        });
      },
      end: function () {
        // if (this.flippedPageOtherside) this.flippedPageOtherside.removeAttribute('style');
        if (this.angle > 5) {
          this.dispatch('animation');
          return;
        }

        this.flippedPage.removeAttribute('style');
        this.flippedPage.classList.remove('flip-right');
        this.flippedPage.style.display = 'flex';
        this.flippedPage.style.left = '50%';

        this.flippedPageBack.removeAttribute('style');
        this.flippedPageBack.classList.remove('move-right');

        if (this.flippedPageUnder) this.flippedPageUnder.removeAttribute('style');

        this.changeStateTo(INACTIVE);
        this.dispatch('end');
      },
      animation: function () {
        this.startAnimation();
      },
    },
    [FLIP_RIGHT_FROM_MIDDLE]: {
      start: function (event) {
        this.flippedPage.removeAttribute('style');
        this.flippedPage.style.left = '50%';
        this.dispatch('move', event);
      },
      move: function (event) {
        const pageWidth = this.bookWidth;
        let x = event.type.indexOf('touch') !== -1 ? event.touches[0].clientX : event.clientX;
        this.angle = 180 - 180 * (x - this.posX) / pageWidth;

        if (this.angle < 90) {
          this.flippedPageBack.removeAttribute('style');
          this.changeStateTo(FLIP_RIGHT_TO_MIDDLE);
          this.dispatch('move', event);
          return;
        }

        if (this.angle > 180) {
          this.dispatch('end');
          return;
        }

        Object.assign(this.flippedPageBack.style, {
          display: 'flex',
          transform: `perspective(2000px) rotateY(${180 - this.angle}deg)`,
        });
      },
      end: function () {
        if (this.angle < 175) {
          this.dispatch('animation');
          return;
        }

        if (this.flippedPageOtherside) this.flippedPageOtherside.removeAttribute('style');

        this.flippedPage.removeAttribute('style');
        this.flippedPage.classList.remove('flip-right');

        this.flippedPageBack.classList.remove('move-right');
        this.flippedPageBack.removeAttribute('style');
        this.flippedPageBack.style.display = 'flex';

        this.pageState.currentPage = this.firstPageView === 'cover' && this.pageState.currentPage === 0
          ? this.pageState.currentPage + 1
          : this.pageState.currentPage + 2;

        this.changeStateTo(INACTIVE);
        this.dispatch('end');
      },
      animation: function () {
        this.startAnimation();
      },
    },
    [FLIP_LEFT_TO_MIDDLE]: {
      start: function () {
        const index = 1;

        if (this.pageState.currentPage < this.numPages - 1) {
          this.flippedPageOtherside = this.pageNodes[this.pageState.currentPage + 1];
        }

        this.flippedPage.classList.add('flip-left');

        this.flippedPageBack = this.pageNodes[this.pageState.currentPage - index];
        this.flippedPageBack.classList.add('move-left');

        if (
          (this.firstPageView === 'cover' && this.pageState.currentPage > 2)
          || (this.firstPageView === 'spread' && this.pageState.currentPage > 1)
        ) {
          this.flippedPageUnder = this.pageNodes[this.pageState.currentPage - index - 1];
          Object.assign(this.flippedPageUnder.style, {
            display: 'flex',
          });
        }

        document.addEventListener(events.move, this.moveHandler);
        document.addEventListener(events.end, this.endMoveHandler);
      },
      move: function (event) {
        const pageWidth = this.bookWidth;
        let x = event.type.indexOf('touch') !== -1 ? event.touches[0].clientX : event.clientX;
        this.angle = 180 - 180 * (x - this.posX) / pageWidth;

        if (this.angle < 90) {
          this.changeStateTo(FLIP_LEFT_FROM_MIDDLE);
          this.dispatch('start', event);
          return;
        }

        if (this.angle > 180) {
          this.dispatch('end');
          return;
        }

        Object.assign(this.flippedPage.style, {
          zIndex: 3,
          display: 'flex',
          transform: `perspective(2000px) rotateY(${180 - this.angle}deg)`,
        });
      },
      end: function () {
        if (this.angle < 175) {
          this.dispatch('animation');
          return;
        }

        this.flippedPage.removeAttribute('style');
        this.flippedPage.classList.remove('flip-left');
        this.flippedPage.style.display = 'flex';

        this.flippedPageBack.removeAttribute('style');
        this.flippedPageBack.classList.remove('move-left');

        if (this.flippedPageUnder) this.flippedPageUnder.removeAttribute('style');

        this.changeStateTo(INACTIVE);
        this.dispatch('end');
      },
      animation: function () {
        this.startAnimation();
      },
    },
    [FLIP_LEFT_FROM_MIDDLE]: {
      start: function (event) {
        this.flippedPage.style.display = 'none';
        this.dispatch('move', event);
      },
      move: function (event) {
        const pageWidth = this.bookWidth;
        let x = event.type.indexOf('touch') !== -1 ? event.touches[0].clientX : event.clientX;
        this.angle = 180 - 180 * (x - this.posX) / pageWidth;

        if (this.angle > 90) {
          this.flippedPageBack.removeAttribute('style');
          this.changeStateTo(FLIP_LEFT_TO_MIDDLE);
          this.dispatch('move', event);
          return;
        }

        if (this.angle < 0) {
          this.dispatch('end');
          return;
        }

        Object.assign(this.flippedPageBack.style, {
          zIndex: 3,
          display: 'flex',
          left: '50%',
          transform: `perspective(2000px) rotateY(-${this.angle}deg)`,
        });
      },
      end: function () {
        if (this.angle > 5) {
          this.dispatch('animation');
          return;
        }

        if (this.flippedPageOtherside) this.flippedPageOtherside.removeAttribute('style');

        this.flippedPage.removeAttribute('style');
        this.flippedPage.classList.remove('flip-left');

        this.flippedPageBack.classList.remove('move-left');
        this.flippedPageBack.removeAttribute('style');
        this.flippedPageBack.style.display = 'flex';
        this.flippedPageBack.style.left = '50%';

        this.pageState.currentPage = this.firstPageView === 'cover' && this.pageState.currentPage === 1
          ? this.pageState.currentPage - 1
          : this.pageState.currentPage - 2;

        this.changeStateTo(INACTIVE);
        this.dispatch('end');
      },
      animation: function () {
        this.startAnimation();
      },
    },
  },
  dispatch(actionName, ...payload) {
    // const actions = this.transitions[this.state];
    const action = this.transitions[this.state][actionName];

    if (action) {
      action.call(this, ...payload);
    }
  },
  changeStateTo(newState) {
    this.state = newState;
  },
  moveHandler(event) {
    this.dispatch('move', event);
  },
  endMoveHandler(event) {
    this.dispatch('end', event);
  },
  startAnimation() {
    // remove events listeners
    document.removeEventListener(events.move, this.moveHandler);
    document.removeEventListener(events.end, this.endMoveHandler);

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
  },
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
      this.dispatch('end');
    }
  },
};

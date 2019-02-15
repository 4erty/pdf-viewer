// check if has touch events
export const isTouch = 'ontouchstart' in window;

// if isTouch - use touch events else use mouse events
export const events = isTouch
  ? { start: 'touchstart', move: 'touchmove', end: 'touchend' }
  : { start: 'mousedown', move: 'mousemove', end: 'mouseup' };

// css font-size + padding + margin for class brochure-title
export const TITLE_HEIGHT = 48;
// pagination height
export const PAGINATION_HEIGHT = 96;

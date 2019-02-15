import {
  FLIP_START,
  FLIP_MOVE_TO_MIDDLE,
  FLIP_MOVE_FROM_MIDDLE,
  FLIP_END,
} from './states';

export default {
  [FLIP_START]: (d, panelEl) => {
    panelEl.style.position = 'absolute';
    panelEl.style.top = '0';
    panelEl.style.bottom = 'auto';
  },

  [FLIP_MOVE_TO_MIDDLE]: (d, panelEl) => {
    panelEl.style.position = 'fixed';
    panelEl.style.top = `${d.topSpacing}px`;
    panelEl.style.bottom = 'auto';
  },

  [FLIP_MOVE_FROM_MIDDLE]: (d, panelEl) => {
    panelEl.style.position = 'absolute';
    panelEl.style.top = `${d.innerOffsetTop - d.startPoint}px`;
    panelEl.style.bottom = 'auto';
  },

  [FLIP_END]: (d, panelEl) => {
    panelEl.style.position = 'absolute';
    panelEl.style.top = `${d.innerOffsetTop - d.startPoint}px`;
    panelEl.style.bottom = 'auto';
  },
};

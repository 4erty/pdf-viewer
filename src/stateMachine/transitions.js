import {
  INACTIVE,
  FLIP_START,
  FLIP_MOVE_TO_MIDDLE,
  FLIP_MOVE_FROM_MIDDLE,
  FLIP_END,
} from './states.js';

export default {
  // 1. Transition from inactive state
  [INACTIVE]: [
    {
      to: FLIP_START,
      when: (d) => [
        true,
      ],
    },
  ],
  // 2. Transition start
  [FLIP_START]: [
    {
      to: INACTIVE,
      when: (d) => [
        d.isPanelFitsContainer === false
      ],
    },
    {
      to: FLIP_MOVE_TO_MIDDLE,
      when: (d) => [
        d.panelOffsetBottom >= d.finishPoint
      ],
    },
  ],
  // 3. Transition move page to middle
  [FLIP_MOVE_TO_MIDDLE]: [
    {
      to: FLIP_START,
      when: (d) => [
        d.isPanelFitsContainer === false
      ],
    },
    {
      to: FLIP_MOVE_FROM_MIDDLE,
      when: (d) => [
        d.panelOffsetBottom >= d.finishPoint
      ],
    },
  ],
  // 4. Transition move page from middle
  [FLIP_MOVE_FROM_MIDDLE]: [
    {
      to: FLIP_MOVE_TO_MIDDLE,
      when: (d) => [
        d.isPanelFitsContainer === false
      ],
    },
    {
      to: FLIP_END,
      when: (d) => [
        d.panelOffsetBottom >= d.finishPoint
      ],
    },
  ],
  // 5. Transition end
  [FLIP_END]: [
    {
      to: INACTIVE,
      when: (d) => [
        d.isPanelFitsContainer === false
      ],
    },
  ],
};

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const prefix = 'fas';
const iconName = 'caret-down';
const width = 320;
const height = 512;
const unicode = 'f0d7';
const svgPathData =
  'M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z';

export const faCaretDown: IconDefinition = {
  prefix,
  iconName,
  icon: [width, height, [], unicode, svgPathData],
};

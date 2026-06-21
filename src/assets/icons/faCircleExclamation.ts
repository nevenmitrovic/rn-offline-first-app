import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const prefix = 'fal';
const iconName = 'circle-exclamation';
const width = 512;
const height = 512;
const unicode = 'f06a';
const svgPathData =
  'M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480zM256 304c8.844 0 16-7.156 16-16V128c0-8.844-7.156-16-16-16S240 119.2 240 128v160C240 296.8 247.2 304 256 304zM256 344c-13.25 0-24 10.75-24 24s10.75 24 24 24s24-10.75 24-24S269.3 344 256 344z';

export const faCircleExclamation: IconDefinition = {
  prefix,
  iconName,
  icon: [width, height, [], unicode, svgPathData],
};

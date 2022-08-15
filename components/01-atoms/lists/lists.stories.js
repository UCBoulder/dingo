import React from 'react';

import dl from './dl.twig';
import ul from './ul.twig';
import ulnb from './ulnb.twig';
import ultrunc from './ul-truncate.twig';
import ol from './ol.twig';

import dlData from './dl.yml';
import ulData from './ul.yml';
import ulnbData from './ul.yml';
import ultruncData from './ul-truncate.yml';
import olData from './ol.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Lists' };

export const definitionList = () => (
  <div dangerouslySetInnerHTML={{ __html: dl(dlData) }} />
);
export const unorderedList = () => (
  <div dangerouslySetInnerHTML={{ __html: ul(ulData) }} />
);
export const unorderedNoBulletList = () => (
  <div dangerouslySetInnerHTML={{ __html: ulnb(ulData) }} />
);
export const unorderedTruncateBulletList = () => (
  <div dangerouslySetInnerHTML={{ __html: ultrunc(ultruncData) }} />
);
export const orderedList = () => (
  <div dangerouslySetInnerHTML={{ __html: ol(olData) }} />
);

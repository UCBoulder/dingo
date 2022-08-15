import React from 'react';

import status from './banner.twig';

import bannerData from './banner.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Banner' };

export const bannerExamples = () => (
  <div dangerouslySetInnerHTML={{ __html: status(bannerData) }} />
);

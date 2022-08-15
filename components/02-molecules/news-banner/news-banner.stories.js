import React from 'react';

import news from './news-banner.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/News' };

export const newz = () => (
  <div dangerouslySetInnerHTML={{ __html: news({}) }} />
);

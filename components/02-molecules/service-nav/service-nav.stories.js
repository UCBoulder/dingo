import React from 'react';

import news from './service-nav.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Service-nav' };

export const newz = () => (
  <div dangerouslySetInnerHTML={{ __html: news({}) }} />
);

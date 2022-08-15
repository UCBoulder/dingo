import React from 'react';

import details from './details.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Details' };

export const detail = () => (
  <div dangerouslySetInnerHTML={{ __html: details({}) }} />
);

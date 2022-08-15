import React from 'react';

import horiz from './horizontal-item.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Horizontal' };

export const horizontal = () => (
  <div dangerouslySetInnerHTML={{ __html: horiz({}) }} />
);

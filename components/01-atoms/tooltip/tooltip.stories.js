import React from 'react';

import tooltips from './tooltip.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/tooltip ' };

export const tooltip = () => (
  <div dangerouslySetInnerHTML={{ __html: tooltips({}) }} />
);

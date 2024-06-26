import React from 'react';

import popovers from './popover.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/popover ' };

export const popover = () => (
  <div dangerouslySetInnerHTML={{ __html: popovers({}) }} />
);

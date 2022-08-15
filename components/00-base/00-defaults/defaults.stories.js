import React from 'react';

import defaults from './flex.twig';


/**
 * Storybook Definition.
 */
export default { title: 'Base/Defaults' };

export const FlexBox = () => (
  <div dangerouslySetInnerHTML={{ __html: defaults() }} />
);

import React from 'react';

import codes from './code.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Codes ' };

export const code = () => (
  <div dangerouslySetInnerHTML={{ __html: codes({}) }} />
);

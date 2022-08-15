import React from 'react';

import services from './service_health_svg.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Service' };

export const service= () => (
  <div dangerouslySetInnerHTML={{ __html: services({}) }} />
);

import React from 'react';

import Button from './react/Button.component';

import button from './twig/button.twig';

import buttonData from './twig/button.yml';
import buttonInternalData from './twig/button-internal.yml';
import buttonInternalActiveData from './twig/button-internal--active.yml';
import buttonExtData from './twig/button-ext.yml';
import buttonExtIcon from './twig/button-ext-icon.yml';
import buttonSocial from './twig/button-social.yml';

/**
 * Storybook Definition.
 */
export default {
  component: Button,
  title: 'Atoms/Button',
};

export const react = () => <Button>React Button</Button>;

export const buttonFunction = () => (
  <div dangerouslySetInnerHTML={{ __html: button(buttonInternalData) }} />
);
export const buttonFunctionActive = () => (
  <div dangerouslySetInnerHTML={{ __html: button(buttonInternalActiveData) }} />
);
export const externalSite = () => (
  <div dangerouslySetInnerHTML={{ __html: button(buttonExtData) }} />
);
export const ExternalPage = () => (
  <div dangerouslySetInnerHTML={{ __html: button(buttonData) }} />
);
export const icon = () => (
  <div dangerouslySetInnerHTML={{ __html: button(buttonExtIcon) }} />
);
export const social = () => (
  <div dangerouslySetInnerHTML={{ __html: button(buttonSocial) }} />
);

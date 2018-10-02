import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import Welcome from './Welcome';

const WelcomeProps = {};

storiesOf('Screens/Welcome', module).add('default', () => (
  <Welcome {...WelcomeProps} />
));

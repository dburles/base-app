import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import People from './People';

const PeopleProps = {};

storiesOf('Screens/People', module).add('default', () => (
  <People {...PeopleProps} />
));

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import Cash from '../icons/Cash';

import IconBox from './IconBox';

const IconBoxProps = {
  title: '$8.20m',
  subtitle: 'Approved Lending',
  icon: <Cash />
};

storiesOf('Components/IconBox', module)
  .addDecorator(
    withBackgrounds([{ name: 'default', value: '#f1f1f1', default: true }])
  )
  .add('default', () => <IconBox {...IconBoxProps} />);

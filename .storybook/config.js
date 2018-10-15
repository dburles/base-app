import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import Global from '../components/utils/Global';

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <Global>
    {story()}
  </Global>
));

configure(loadStories, module);

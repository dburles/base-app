import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import GlobalStyles from '../components/utils/GlobalStyles';

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <>
    <GlobalStyles />
    {story()}
  </>
));

configure(loadStories, module);

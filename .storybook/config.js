import { configure } from '@storybook/react';

function loadStories() {
  require('./stories/header');
  require('./stories/footer');
  require('./stories/logo');
  require('./stories/button');
}

configure(loadStories, module);

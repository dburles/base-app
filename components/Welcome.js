import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const Welcome = () => (
  <Container text>
    <Header as="h2">Welcome!</Header>
    <p>
      This project makes use of{' '}
      <a
        href="https://react.semantic-ui.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Semantic UI React
      </a>
    </p>
    <p>
      For help on structuring stories within Storybook, reference{' '}
      <a
        href="https://www.learnstorybook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Storybook
      </a>
    </p>
  </Container>
);

export default Welcome;

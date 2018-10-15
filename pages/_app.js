import React from 'react';
import App, { Container } from 'next/app';
import Global from '../components/utils/Global';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps)
      pageProps = await Component.getInitialProps(ctx);

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Global>
          <Component {...pageProps} />
        </Global>
      </Container>
    );
  }
}

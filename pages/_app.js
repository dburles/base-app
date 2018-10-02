import React from 'react';
import Head from 'next/head';
import App, { Container } from 'next/app';

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
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
          />
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}

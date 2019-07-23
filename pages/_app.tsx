import App, { Container } from 'next/app';
import React from 'react';
import { NomalizeCSS } from '../utils';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <NomalizeCSS />
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp;
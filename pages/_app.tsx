import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store';
import { NomalizeCSS } from '../utils';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <NomalizeCSS />
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default MyApp;
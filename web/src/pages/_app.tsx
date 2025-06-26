import NextApp from 'next/app';
import '~/global-styles.scss';

class App extends NextApp {
  public render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default App;

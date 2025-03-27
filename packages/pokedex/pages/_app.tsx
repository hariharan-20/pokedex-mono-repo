import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../Store';
import { wrapper } from '../Store';


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default wrapper.withRedux(MyApp);

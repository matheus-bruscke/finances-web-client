import { AppProvider } from '@/providers';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Component {...pageProps} />;
    </AppProvider>
  );
};

export default MyApp;

import { AppLayout } from '@/components/layouts';
import { AppProvider } from '@/providers';
import { AppProps } from 'next/app';
import { makeServer } from '@/services/fakes';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </AppProvider>
  );
};

export default MyApp;

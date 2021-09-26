import { AppLayout } from '@/components/layouts';
import { AppProvider } from '@/providers';
import { makeServer } from '@/services/fakes';
import { AppProps } from 'next/app';

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

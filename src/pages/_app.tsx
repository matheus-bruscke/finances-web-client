import { AppLayout } from '@/components/layouts';
import { AppProvider } from '@/providers';
import { AppProps } from 'next/app';

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

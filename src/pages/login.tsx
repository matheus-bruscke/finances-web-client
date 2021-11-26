import { LoginView } from '@/views';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/client';

const LoginPage: NextPage = () => <LoginView />;

export default LoginPage;

export const getServerSideProps: GetServerSideProps = async req => {
  const session = await getSession(req);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

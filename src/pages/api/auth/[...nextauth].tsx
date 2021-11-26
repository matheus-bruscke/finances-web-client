import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Google({
      clientId:
        '35134954342-mrulmfmbj65nf5ujk1nrq2ndsiab6kdo.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
});

import '../styles/globals.css';
import { SessionProvider, signIn } from 'next-auth/react';
import { RecoilRoot } from 'recoil';
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
      <Component {...pageProps} />;
      </RecoilRoot>

    </SessionProvider>
  );
}

export default MyApp;

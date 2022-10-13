import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { CustomMantineProvider } from '../config/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <CustomMantineProvider>
      <Component {...pageProps} />
    </CustomMantineProvider>
  );
}

export default App;

import { ThemeProvider } from '@/contexts/ThemeContext';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import GlobalStyles from '@/components/GlobalStyles ';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
   <ThemeProvider>
    <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
   </ThemeProvider> 
   
  );
};

export default MyApp;

import { Header } from '@/components/Header'
import  GlobalStyle from '../styles/global'
import type { AppProps } from 'next/app';
import { FilterProvider } from '@/contexts/FilterContext';

export default function App({ Component, pageProps }: AppProps) {
  return <FilterProvider>
            <Header/>
            <Component {...pageProps} />
            <GlobalStyle />
        </FilterProvider>

        
      
     
}

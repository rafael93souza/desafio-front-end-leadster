import { Header } from '@/components/Header'
import  GlobalStyle from '../styles/global'
import type { AppProps } from 'next/app';
import { FilterProvider } from '@/contexts/FilterContext';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/services/queryClient';
import { VideoProvider } from '@/contexts/VideosContext';
import { StyleSheetManager } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return   (
    <QueryClientProvider client={queryClient}>
        <VideoProvider>
            <FilterProvider>
                <StyleSheetManager shouldForwardProp={(prop) => prop !== 'theme'}>
                    <Header/>
                    <Component {...pageProps} />
                    <GlobalStyle />
                </StyleSheetManager>
            </FilterProvider>
        </VideoProvider>
    </QueryClientProvider>  
  )  
}

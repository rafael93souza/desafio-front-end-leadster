import { Header } from '@/components/Header'
import type { AppProps } from 'next/app';
import { FilterProvider } from '@/contexts/FilterContext';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/services/queryClient';
import { VideoProvider } from '@/contexts/VideosContext';
import { StyleSheetManager } from 'styled-components';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return   (
    <QueryClientProvider client={queryClient}>
        <VideoProvider>
            <FilterProvider>
                <StyleSheetManager shouldForwardProp={(prop) => prop !== 'theme'}>
                    <Header/>
                    <Component {...pageProps} />
                </StyleSheetManager>
            </FilterProvider>
        </VideoProvider>
    </QueryClientProvider>  
  )  
}

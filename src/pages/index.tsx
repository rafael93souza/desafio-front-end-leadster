import { CardModalComponent } from '@/components/CardModalComponet';
import { CardsContainerComponent } from '@/components/CardsContainer';
import { Filter } from '@/components/Filter';
import { ModalComponent } from '@/components/Modal';
import { useVideosContext } from '@/contexts/VideosContext';
import styles from '@/styles/Home.module.css';
import { Plus_Jakarta_Sans, } from 'next/font/google';
import Head from 'next/head';
import { HomeComponet } from '../components/HomeComponent';
import { SeeDemoComponent } from '@/components/SeeDemoComponent';
import { FooterComponent } from '@/components/FooterComponent';

const plusJakartaSans = Plus_Jakarta_Sans({ 
    weight: ['300','400','500','600','700'],
    subsets: ['latin'] 
});

export default function Home() {
    const {isModalOpen} = useVideosContext()
  return (
    <>
      <Head>
        <title>Leadster: Menos conversinha, Mais Conversão</title>
        <meta name="description" content="Leadster Mais Conversão" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${plusJakartaSans.className}`}>
         <HomeComponet/>
         <Filter/>
         <CardsContainerComponent/>
         <SeeDemoComponent/>
         <FooterComponent/>
        {isModalOpen &&
            (
                <ModalComponent>
                    <CardModalComponent/>
                </ModalComponent>
            )
        }
      </main>
    </>
  )
}

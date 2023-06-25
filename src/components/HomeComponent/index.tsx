"use client"
import Image from "next/image";
import { ButtonHome, ContainerTitle, HomeContainer, HomeContent } from "./styles";
import iconeTilte from '../../assets/asset-header.png';

export function HomeComponet(){
    return (
        <HomeContainer>
            <HomeContent>
                <ButtonHome>
                    webinars exclusivos
                </ButtonHome>
                <h2>Menos Conversinha,</h2>
                <ContainerTitle>
                    <h1>Mais Conversão</h1>
                    <Image 
                    src={iconeTilte}
                    alt='Icone com três traços'
                    width={49}
                    height={32}
                    />
                </ContainerTitle>
                <span>
                    Conheça as estratégias que 
                    <strong> mudaram o jogo </strong> 
                    e comos aplicá-las no seu negócio
                </span>
            </HomeContent>
        </HomeContainer>
    )
}
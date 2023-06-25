"use client"
import Image from "next/image";
import { CardContainer, CardContent } from "./styles";
import imageCard from '../../assets/thumbnail.png'
import { CardVideoProps } from "@/@types/video-type";

export function CardComponent({video, handleClick}:CardVideoProps){ 
    return(
        <CardContainer>
            <CardContent onClick={()=> handleClick(video)}>
                <span/>
                <Image
                    src={imageCard}
                    alt={"Imagem video"}
                    width={360}
                    height={206}
                />
                <h1>{video.title}</h1>
            </CardContent>
        </CardContainer>
    )
}
"use client"

import { useVideos } from "@/hooks/useVideos";
import { CardComponent } from "../CardComponent";
import { CardsContainer, CardsContent } from "./styles";
import { PaginatationComponent } from "../Pagination";
import { useState } from "react";
import { useVideosContext } from "@/contexts/VideosContext";
import { Video } from "@/@types/video-type";

export function CardsContainerComponent(){
    const [page, setPage] = useState(1);
    const { data } = useVideos(page);
    const {setIsModalOpen,setVideo} = useVideosContext()
   
    function handleChangePage(page: number){
        setPage(page);
    }

    function handleClickVideo(video:Video){
        setVideo(video);
        setIsModalOpen(true);
    }
    return (
        <CardsContainer>
            <CardsContent>
            {data?.videos.map(video => {
              return  (
                <CardComponent 
                    key={video.id}
                    video={video}
                    handleClick={handleClickVideo}
                />
              )
            })}
            </CardsContent>
            <PaginatationComponent
            totalCount={data?.totalCount || 0 }
            onChange={handleChangePage}
            page={page}
            />
        </CardsContainer>
    )
}
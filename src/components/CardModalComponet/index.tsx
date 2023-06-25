"use client"

import Image from "next/image";
import { ModalCardContainer, ModalCardContent, ImagesDownloadsContainer } from "./styles";
import { useVideosContext } from "@/contexts/VideosContext";
import fileDoc from '../../assets/file-doc.png';
import fileXls from '../../assets/file-xls.png';
import filePpt from '../../assets/file-ppt.png';

export function CardModalComponent(){
    const {video, setIsModalOpen} = useVideosContext();
    return(
        <ModalCardContainer>
            <ModalCardContent>
            <h1><strong>Webinar: </strong>{video.title}</h1>
                <iframe width="100%" height="400" src={video.url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen >
                </iframe>
            <h2>Descrição</h2>
            <p>{video.description}</p>

            <h2>Downloads</h2>
            <ImagesDownloadsContainer>
                <button>
                    <Image
                        src={fileXls}
                        alt={'Arquivo .xls'}
                    />
                </button>
                <button>
                    <Image
                        src={fileDoc}
                        alt={'Arquivo .doc'}
                    />
                </button>
                <button>
                    <Image
                        src={filePpt}
                        alt={'Arquivo .ppt'}
                    />
                </button>
            </ImagesDownloadsContainer>
            </ModalCardContent>
        </ModalCardContainer>
    )
}
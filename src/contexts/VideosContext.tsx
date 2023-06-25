import { Video } from "@/@types/video-type";
import { ReactNode, createContext, useContext, useState } from "react";

interface VideoContextProps{
    video:Video;
    setVideo: (value:Video) => void;
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean)=>void;

}
interface VideoProviderProps {
    children: ReactNode;
}

export const VideoContext = createContext({} as VideoContextProps);

export function VideoProvider({children}:VideoProviderProps){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [video, setVideo] = useState<Video>({}as Video);
    return (
        <VideoContext.Provider value={{video, setVideo, isModalOpen, setIsModalOpen}}>
            {children}
        </VideoContext.Provider>
    )
}

export const useVideosContext = () => useContext(VideoContext);

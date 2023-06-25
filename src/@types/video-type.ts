export interface Video {
    id: string;
    title: string;
    url: string;
    description: string;
}

export interface CardVideoProps{
    video: Video;
    handleClick:(value: Video)=>void;
}
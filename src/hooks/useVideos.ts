import { useQuery } from 'react-query';
import { api } from '../services/api';
import { Video } from '@/@types/video-type';

type GetVideosResponse = {
    totalCount: number;
    videos: Video[];
}

export async function getVideos(page: number): Promise<GetVideosResponse> {
    try {
        const response = await api.get("/api/videos", {
            params: {
                page
            }
        });
        return {...response.data};
    } catch (error) {
        return { videos: [], totalCount: 0 };
    }
}

export function useVideos(page: number) {
    return useQuery(['videos', page], () => getVideos(page), {
        staleTime: 1000 * 60 * 10 //10 min
    });
}
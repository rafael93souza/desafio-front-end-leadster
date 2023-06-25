import type { NextApiRequest, NextApiResponse } from 'next'
import databaseVideos from '../../database/videos';
import { Video } from '@/@types/video-type';

interface ResponseApi {
    totalCount: number;
    videos:Video[]
}

export default function handler( req: NextApiRequest, res: NextApiResponse<ResponseApi>) {
    const { page = 1, per_page = 9 } = req.query;
        const totalCount = databaseVideos.length;
        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);
        const videos = databaseVideos.slice(pageStart, pageEnd)
        res.status(200).json({totalCount, videos});
 
}

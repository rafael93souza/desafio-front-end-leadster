import {screen, render} from '@testing-library/react';
import { CardsContainerComponent} from '.';
import { useVideosContext } from '@/contexts/VideosContext';
import { useVideos } from '../../hooks/useVideos';
import { PaginatationComponent } from '../Pagination';

const videos = [
    {
        id: 'test-fake',
        title:'Fake Title',
        description:'Fake description',
        url:'http://fake-video.com'
    },
    {
        id: 'test-fake 2',
        title:'Fake Title 2',
        description:'Fake description',
        url:'http://fake-video.com'
    }
]

jest.mock("../../contexts/VideosContext");
jest.mock("../Pagination");
jest.mock("../../hooks/useVideos");

describe('Cards Component', () => {
    it('should render correctly', async () => {
        const useVideosContextMocked = jest.mocked(useVideosContext);
        const useVideosMocked = jest.mocked(useVideos);
        const PaginationComponentMocked = jest.mocked(PaginatationComponent);

       useVideosContextMocked.mockReturnValueOnce({
            setVideo: jest.fn(),
            setIsModalOpen: jest.fn(),
        } as any)

        PaginationComponentMocked.mockReturnValueOnce(<button> 1 </button> as any)
        useVideosMocked.mockReturnValueOnce({
            data:{
                totalCount: 1,
                videos
            }
              
        } as any)
        render(<CardsContainerComponent />) 
        expect(screen.getByText('Fake Title')).toBeVisible();
        expect(screen.getByText('Fake Title 2')).toBeVisible();
    });
});
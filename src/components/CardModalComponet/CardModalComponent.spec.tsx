import {screen, render} from '@testing-library/react';
import { CardModalComponent } from '.';

import { useVideosContext } from '@/contexts/VideosContext';

const video =    {
    id: 'test-fake',
    title:'Fake Title',
    description:'Fake description',
    url:'http://fake-video.com'
}

jest.mock("../../contexts/VideosContext");

describe('Card Modal Component Component', () => {
    it('render correctly', () => {
        const useVideosContextMocked = jest.mocked(useVideosContext);

        useVideosContextMocked.mockReturnValueOnce({
            video,
            setIsModalOpen: jest.fn(),
        } as any)

        render(<CardModalComponent/>) 
        expect(screen.getByText('Descrição')).toBeVisible();
        expect(screen.getByText(video.description)).toBeVisible();
    });
});
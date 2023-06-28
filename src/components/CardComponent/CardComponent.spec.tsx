import {screen, render, fireEvent} from '@testing-library/react';
import { CardComponent} from '.';

const video = {
    id: 'test-fake',
    title:'Fake Title',
    description:'Fake description',
    url:'http://fake-video.com'
}

describe('Header Component', () => {
    it('should render correctly', () => {
        render(<CardComponent video={video} handleClick={jest.fn()}/>) 
        expect(screen.getByText('Fake Title')).toBeVisible();
    });

    it('should be able to click in the card', () => {
        const onClickCard = jest.fn();
        render(<CardComponent video={video} handleClick={onClickCard}/>);
        const ImageCard = screen.getByRole('img', {name: /imagem video/i});
        fireEvent.click(ImageCard);
        expect(onClickCard).toHaveBeenCalled();
    });
});
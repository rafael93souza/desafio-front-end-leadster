import {screen, render} from '@testing-library/react';
import { HomeComponet } from '.';

describe('Home Component Component', () => {
    it('should render correctly', () => {
        render(<HomeComponet/>) 
        expect(screen.getByText('webinars exclusivos')).toBeVisible();
        expect(screen.getByText('Menos Conversinha,')).toBeVisible();
        expect(screen.getByText('Mais Conversão')).toBeVisible();

    });
});
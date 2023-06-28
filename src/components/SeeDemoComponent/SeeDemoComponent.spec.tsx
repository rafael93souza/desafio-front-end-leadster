import {screen, render} from '@testing-library/react';
import { SeeDemoComponent } from '.';

describe('See Demo Component', () => {
    it('should render correctly', () => {
        render(<SeeDemoComponent/>) 
        expect(screen.getByText('Pronto para triplicar sua')).toBeVisible();
        expect(screen.getByText('Geração de Leads?')).toBeVisible();
        expect(screen.getByText('Ver Demonstração')).toBeVisible();

    });
});
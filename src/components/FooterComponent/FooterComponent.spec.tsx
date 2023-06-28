import {screen, render, fireEvent, createEvent} from '@testing-library/react';
import { FooterComponent } from '.';

describe('Home Component Component', () => {
    it('should render correctly', () => {
        render(<FooterComponent/>) 
        expect(screen.getByText('Transformando visitantes em clientes')).toBeVisible();
        expect(screen.getByText('Siga a Leadster')).toBeVisible();
    });
});
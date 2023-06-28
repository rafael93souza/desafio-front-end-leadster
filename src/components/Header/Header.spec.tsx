import {screen, render} from '@testing-library/react';
import { Header } from '.';

describe('Header Component', () => {
    it('should render correctly', () => {
        render(<Header/>) 
        expect(screen.getByRole('img', { name: /logo leadster/i }))
    });
});
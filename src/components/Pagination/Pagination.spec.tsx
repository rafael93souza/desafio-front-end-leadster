import {screen, render} from '@testing-library/react';
import { PaginatationComponent} from '.';
import { Pagination } from 'antd';

jest.mock('antd');

describe('Paginatation Component', () => {
    it('should render correctly', () => {
        const paginationMocked = jest.mocked(Pagination);

        paginationMocked.mockReturnValueOnce(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)

      render(<PaginatationComponent page={1} totalCount={45}onChange={jest.fn()}/>) 
      expect(screen.getByText('Página')).toBeVisible();
    });
});
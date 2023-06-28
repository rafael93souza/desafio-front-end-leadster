import {screen, render, fireEvent} from '@testing-library/react';
import { Filter } from '.';
import { useFilter } from '../../contexts/FilterContext';
import { FilterType, OrderByType } from '@/@types/filter-type';

jest.mock("../../contexts/FilterContext");

describe('Header Component', () => {
    it('should render correctly', () => {
        const useFilterMocked = jest.mocked(useFilter);

        useFilterMocked.mockReturnValueOnce({
            filterType: FilterType.AGENCY,
            setFilterType: jest.fn(),
            orderBy:'DATE',
            setOrderBy: jest.fn(),
        });
        render(<Filter/>);
        expect(screen.getByText('Agências')).toBeVisible();
        expect(screen.getByText('Chatbot')).toBeVisible();
        expect(screen.getByText('Data de Publicação')).toBeVisible();
    });

    it('should be able to click the filter button', () => {
        const useFilterMocked = jest.mocked(useFilter);
        const onClickButton = jest.fn();

        useFilterMocked.mockReturnValueOnce({
            filterType: FilterType.AGENCY,
            setFilterType: onClickButton,
            orderBy:'DATE',
            setOrderBy: jest.fn(),
        });
    
        render(<Filter/>);

        const digitalMarketingButton = screen.getByText('Marketing Digital');
        fireEvent.click(digitalMarketingButton);

        expect(onClickButton).toHaveBeenCalled();
    });

    it('should be able to on change select button', () => {
        const useFilterMocked = jest.mocked(useFilter);
        let valueSelectMocked:OrderByType = 'DATE';

        const onChangeButton = jest.fn(value => valueSelectMocked = value);

        useFilterMocked.mockReturnValueOnce({
            filterType: FilterType.AGENCY,
            setFilterType: jest.fn(),
            orderBy: valueSelectMocked,
            setOrderBy: onChangeButton,
        });
    
        render(<Filter/>);

        const selectButton = screen.getByRole('combobox');

        fireEvent.change(selectButton,{target:{value: 'NAME'}});

        expect(valueSelectMocked).toBe('NAME')
        expect(onChangeButton).toHaveBeenCalled();
    });
});
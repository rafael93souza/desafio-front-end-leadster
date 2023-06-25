import { FilterType, OrderByType } from "@/@types/filter-type";
import { ReactNode, createContext, useContext, useState } from "react";

interface FilterContextProps{
    filterType: FilterType;
    setFilterType: (value:FilterType) => void;
    orderBy: OrderByType;
    setOrderBy: (value: OrderByType)=>void;

}
interface FilterProviderProps {
    children: ReactNode;
}

export const FilterContext = createContext({} as FilterContextProps);

export function FilterProvider({children}:FilterProviderProps){
 const [filterType, setFilterType]= useState<FilterType>(FilterType.AGENCY);
 const [orderBy, setOrderBy]= useState<OrderByType>('DATE');

    return (
        <FilterContext.Provider value={{filterType, setFilterType, orderBy, setOrderBy}}>
         {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext);
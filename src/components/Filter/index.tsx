"use client"
import { useFilter } from "@/contexts/FilterContext";
import { ButtonFilter, FilterButtonsContainer, FilterContainer, FilterContent, FilterSelect } from "./styles";
import { DataFilter, FilterType} from "@/@types/filter-type";


const dataFilter:DataFilter[] = [
    {id:FilterType.AGENCY, name:'Agências' },
    {id:FilterType.CHATBOT, name:'Chatbot' },
    {id:FilterType.DIGITAL_MARKETING, name:'Marketing Digital' },
    {id:FilterType.GENERATION_LEADS, name:'Geração de Leads' },
    {id:FilterType.PAID_MEDIA, name:'Mídia Paga' },
]

export function Filter(){
    const {filterType,setFilterType, orderBy, setOrderBy} = useFilter();

    return (
        <FilterContainer>
            <FilterContent>
                <FilterButtonsContainer>
                    {dataFilter.map(typeFilter=>{
                        return (
                            <ButtonFilter 
                                selected={filterType === typeFilter.id}
                                onClick={()=>setFilterType(typeFilter.id)}
                                key={typeFilter.id}
                            >
                                 {typeFilter.name}
                            </ButtonFilter>
                        )
                    })}
                </FilterButtonsContainer>
                <FilterSelect>
                    <span>Ordenar por</span>
                    <select 
                    value={orderBy}
                    onChange={(e)=> setOrderBy(e.target.value ==='DATE'? 'DATE' : 'NAME')}
                    >
                        <option value={'DATE'}>Data de Publicação</option>
                        <option value={'NAME'}>Nome</option>
                    </select>
                </FilterSelect>
            </FilterContent>
        </FilterContainer>
    )
}
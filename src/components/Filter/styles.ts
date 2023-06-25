"use client";

import { styled } from "styled-components";

interface ButtonFilterProps{
    selected: boolean;
}

export const FilterContainer = styled.div`
    width:100%;
    height:fit-content;
    padding-top: 92px;
`

export const FilterContent = styled.div`
    width:100%;
    height:100%;
    max-width:var(--max-width);
    display: flex;
    align-items: center;
    justify-content: center; 
    margin: 0 auto;
    padding-bottom:25px;
    border-bottom: 1px solid var(--gray-100);

    @media(max-width: 764px){
       flex-direction:column;
       gap:20px;
    }
`

export const FilterButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:1rem;
    
    @media(max-width: 764px){
        align-items:center;
        justify-content: center;
    }
`

export const ButtonFilter = styled.button<ButtonFilterProps>`
    all: unset;
    cursor: pointer;
    height: 40px;
    border-radius: 100px;
    font-weight:600;
    padding: 0px 30px;
    color: ${props => props.selected ? 'var(--white-100)':'var(--blue-900)' };
    background-color: ${props => props.selected ? 'var(--primary-color)':'var(--white-100)' };
    border: 1px solid ${props => props.selected ? 'var(--primary-color)':'var(--blue-900)'};

    &:hover{
        color: ${props => props.selected ? 'var(--white-100)':'var(--primary-color)' };
        border: 1px solid ${props => props.selected ? 'var(--primary-color)':'var(--primary-color)'};
    }
`

export const FilterSelect = styled.div`
    padding: 0px 20px;
    display:flex;
    align-items: center;
    gap:15px;

    span{
    font-weight:600;
   }

   select{
    cursor: pointer;
    height: 40px;
    font-weight:600;
    border-radius: 8px;
    padding: 10px;
    color: var(--blue-900);
    border: 1px solid var(--blue-900);
   }
`


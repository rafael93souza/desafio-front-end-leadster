"use client";
import { styled } from "styled-components";

export const CardsContainer = styled.section`
    width:100%;
    height:fit-content;
    padding-top: 60px;
`

export const CardsContent= styled.div`
    width:100%;
    height:100%;
    max-width:var(--max-width);
    display: flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: center; 
    gap:30px;
    margin: 0 auto;
    padding-bottom:60px;
    border-bottom: 1px solid var(--gray-100);

`
"use client";

import { styled } from "styled-components";

export const PaginationContainer = styled.div`
    width:100%;
    height:fit-content;
    padding: 30px 0px 60px;
`
export const PaginationContent = styled.div`
    width:100%;
    height:100%;
    max-width:var(--max-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        font-size: 1rem;
        color: var(--blue-900);
        font-weight:700;
    }
`
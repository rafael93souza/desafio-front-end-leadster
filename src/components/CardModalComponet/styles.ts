"use client";
import { styled } from "styled-components";

export const ModalCardContainer = styled.div`
    width:100%;
    max-width:600px;
    height:750px;
    border-radius:10px;
    background-color:var(--white-100);
`

export const ModalCardContent = styled.div`
    width:100%;
    height:100%;
    border-radius:10px;
    display: flex;
    flex-direction:column;
    position: relative;

    h1{
        strong{
            font-weight:500;
            color:var(--primary-color);
        }

        font-size:1rem;
        padding:1rem;
        color: var(--blue-900);
        font-weight:500;
        max-width:550px;
        font-size:1.5rem;
        text-align:justify;
        margin:0px auto;
    }

    h2{
        font-size:1.2rem;
        padding-top:20px;
        color: var(--blue-900);
        border-bottom: 1.5px solid var(--gray-100);
    }
    p{
        padding-top:10px;
        color: var(--blue-900);
    }

`
export const ImagesDownloadsContainer = styled.div`

    display: flex;
    gap: 5px;
    padding-top:20px;
    flex-wrap: wrap;
    button{
        all:unset;
        cursor:pointer;
    }

`
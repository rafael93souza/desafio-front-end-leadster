"use client";
import { styled } from "styled-components";

export const SeeDemoContainer = styled.section`
    width:100%;
    position:relative;
    height:fit-content;
    min-height:700px;
    padding:40px;
    background-color:var(--blue-100); 
    overflow:hidden; 
    margin-bottom:50px;

    &::before{
        content:'';
        margin-top:200px;
        margin-left:-250px;
        min-width:60%;
        min-height:120%;
        border-radius: 100px;
        z-index:0;
        position:absolute;
        transform: rotate(45deg);
        background-color:var(--blue-200);
        overflow:hidden;
    }

    @media (max-width: 999px) {
        flex-direction: column;
        height:fit-content;
        min-height:1050px;
        padding:40px 0px;
        .img{
            max-width:80%;
            height:auto;
        }  
    }
    @media (max-width: 750px) {
        min-height:950px; 
    }
    @media (max-width: 500px) {
        min-height:800px;

        &::before{
            min-width:120%;
            min-height:120%;
        }
    }
    
`

export const SeeDemoContent = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    z-index:2;
    display: flex;
    align-items: center;
    justify-content: center; 
    margin: auto;

    .img{
        max-width:50%;
        height:auto;
    }   
    @media (max-width: 999px) {
        flex-direction: column;
        height:fit-content;

        .img{
            max-width:80%;
            height:auto;
        }  
    }
`
export const SeeDemoContentAction = styled.div`
    max-width:50%;
    height:100%;
    padding:200px 50px;
    display: flex;
    flex-direction:column;

    h1{
        color: var(--blue-900);
        font-weight: 500;
        font-size:2rem;
        margin-top:1rem;
    }

    p{
        font-weight: 600;
        color: var(--blue-900);
        margin:0.7rem 0rem 1rem;
        padding-bottom:0.7rem;
        border-bottom: 1.5px solid var(--gray-100);
    }

    @media (max-width: 999px) {
        max-width:90%;
        height:fit-content;
        padding:20px 50px;
    }
    @media (max-width: 650px) {
        padding:20px 0px;
        .mobile{
            gap:15px;
            flex-direction: column;
        }
    }
`

export const SeeDemoContentFlex = styled.div`
    display: flex;
    align-items: center;
    gap:5px; 
    padding-bottom:20px; 
    
    button{
        all: unset;
        cursor: pointer;
        width:260px;
        height:60px; 
        border-radius:100px;
        text-align:center;
        color:var(--white-100);
        background-color: var(--primary-color);
        margin-right: 20px;
    }

    img{
        width: auto;
    }

    span{
        font-weight:500;
        font-size:0.8rem;
        color: var(--blue-900);
    }

`
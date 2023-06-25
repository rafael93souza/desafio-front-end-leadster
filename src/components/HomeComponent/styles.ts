"use client";
import { styled } from "styled-components";

export const HomeContainer = styled.section`
    width:100%;
    height:550px;
    background-color:var(--blue-100);  
`

export const HomeContent = styled.section`
    width:100%;
    height:100%;
    max-width:var(--max-width);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    margin: 0 auto;

    h2{
        color: var(--blue-900);
        font-weight: 500;
        font-size:2.6rem;
        margin-top:1rem;
    }

    span{
        font-weight: 500;
        color: var(--blue-900);
        margin-top:1rem;
    }

   
    @media (max-width: 764px) {
        h2{
            font-size: 2rem;
        }
        img{
            top:0.2rem;
        }
        
        span{
             text-align: center;
        }
    }

    @media (max-width: 550px) {
        h2{
            font-size: 1.5rem;
        }
        img{
            top:0.2rem;
        }
    }
`

export const ButtonHome = styled.button`
    all: unset;
    width: 200px;
    height: 35px;
    font-weight:700;
    text-align: center;

    color: var(--primary-color);

    border-radius: 25px 25px 25px 5px;
    border: 2px solid var(--primary-color);
`
export const ContainerTitle = styled.div`

    position:relative;
    border-bottom: 1px solid var(--gray-100);
    padding:0px 1.5rem;
  
    h1{
        color:var(--primary-color);
        font-weight: 700;
        font-size:5rem;
    }
    img{
        position:absolute;
        top:0.5rem;
        right:0.5rem;
    }

    @media (max-width: 764px) {
        h1{
            font-size: 4rem;
        }
        img{
            top:0.2rem;
        }
    }
    @media (max-width: 550px) {
        margin-top:1rem;
        h1{
            font-size: 2.5rem;
        }
        img{
            width:2.5rem;
            height: 1.8rem;
            top:-0.2rem;
            right:0.3rem;
        }

  }
`
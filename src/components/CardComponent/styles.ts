"use client";

import { styled } from "styled-components";

export const CardContainer = styled.div`
    cursor:pointer;
    width:360px;
    height:290px;
    border-radius:10px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
`

export const CardContent = styled.div`
    width:100%;
    height:100%;
    border-radius:10px;
    display: flex;
    flex-direction:column;
    position: relative;

    h1{
        font-size:1rem;
        padding:1rem;
        color: var(--blue-900);
        font-weight:700;
    }

    img{
        width:100%;
        border-radius:10px 10px 0px 0px;
    }

    &:hover{
        h1{
            color: var(--primary-color);
        }

        span{
            background-color:var(--blue-filter-100);
            width:100%;
            height:206px;
            position: absolute;
            border-radius:10px 10px 0px 0px;
            display: flex;
            align-items: center;
            justify-content: center;

            &::before{
                content: '';
                position: absolute;
                border-color:var(--white-100);

                width: 74px;
                height: 74px;
                border-style: solid;
                border-width: 37px;
                border-color: #202020;

                border-width: 37px 37px 37px 37px;
                border-color: red blue green yellow;

                border-width: 37px 5px 37px 74px;
                border-color: red blue green yellow;

                box-sizing: border-box;
                width: 74px;
                height: 74px;
                border-width: 37px 5px 37px 74px;

                border-color: transparent transparent transparent var(--white-100);
            }
        }
    }
`
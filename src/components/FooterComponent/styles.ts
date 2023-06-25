import { styled } from "styled-components";

export const FooterContainer = styled.footer`
    width:100%;
    height:fit-content;
`

export const FooterContent = styled.footer`
    width:100%;
    height:100%;
    max-width:var(--max-width);
    display: flex;
    flex-direction: column;
    align-items: center;   
    margin:0 auto;

    .description{
        font-weight:600;
        font-size:0.7rem;
        color: var( --gray-200);
    }
`

export const Logo = styled.a`
    width: 200px;
    cursor: pointer;
`
export const FooterNavBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    width:100%;
    padding: 20px 0px 50px;
    justify-content:space-around;
    margin-bottom: 30px;
    border-bottom: 1px solid var( --gray-200);

    @media(max-width: 750px){
        flex-direction: column; 
        padding-top: 0px;
    }
`
export const FooterNavBarList = styled.div`
    color: var( --gray-200);

    h1{
        color: var(--black-100);
        font-size: 1rem;
        margin-bottom:25px;
    }

    ul{
        display: flex;
        flex-direction:column;
        gap:10px;
        li{
            list-style: none;
            a{
                font-size:0.8rem;
                text-decoration: none;
                color: var( --gray-200);
            }
        }
    }

    @media(max-width: 800px){
       margin:0 auto;
       display: flex;
       flex-direction: column;
       align-items: center;

       h1{
        margin-top:50px;
       }
       ul{           
            li{
                text-align: center;
                a{
                    font-size:0.8rem;
                    text-decoration: none;
                    color: var( --gray-200);
                }
            }
        }
    }

`
export const FooterContact = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        color: var(--black-100);
        font-size: 1rem;
        margin-bottom:25px;
    }

    span{
        color: var(--black-100);
        margin-bottom:15px;
        font-weight:500;
        font-size:0.8rem;
        a{
            color: var( --gray-200);
            text-decoration:none;
        }
    }

    @media(max-width: 800px){
       margin:0 auto;
       display: flex;
       flex-direction: column;
       align-items: center;

       h1{
        margin-top:50px;
       }

       span{
            color: var(--black-100);
            margin-bottom:15px;
            font-weight:500;
            font-size:0.8rem;
            a{
                color: var( --gray-200);
                text-decoration:none;
            }
        }
    }

`
export const FooterContactSocialMedia = styled.div`
    display: flex;
    gap:10px;
    margin-bottom:20px;
    
    a{
        display: flex;
        align-items:center;
        justify-content: center;
        background-color: var(--white-200);
        width:40px;
        height: 40px;
        border-radius:100%;

        img{
            width: 20px;
            height: auto;
        }
    }
`
export const FooterCopyright = styled.div`
    display: flex;
    gap:30px;
    margin-bottom:20px;
    text-align: center;
    span{
        font-size:0.9rem;
        color: var( --gray-200);

        a{
            text-decoration:none;
            color: var(--primary-color);
        }
    }

    @media(max-width: 800px){
        flex-direction: column;
    }

`
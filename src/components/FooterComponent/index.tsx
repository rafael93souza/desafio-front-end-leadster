import { FooterContainer, FooterContent, Logo, FooterNavBar, FooterNavBarList, FooterContact, FooterContactSocialMedia, FooterCopyright } from "./styles";
import Image from "next/image";
import logoImg from "../../assets/leadster.gif";
import FacebookIcon from '../../assets/facebook.svg';
import InstagramIcon from '../../assets/instagram.svg';
import linkedinIcon from '../../assets/linkedIn.svg';
import footerDatabase from "@/database/footer";


export function FooterComponent(){
    const {listFooter,contact:{socialMedia,email,telephone}} = footerDatabase;
    return (
        <FooterContainer>
            <FooterContent>
                <Logo href="#">
                    <Image 
                        src={logoImg}
                        alt="Logo leadster"
                        priority={false} 
                    />
                </Logo>
                <p className="description">Transformando visitantes em clientes</p>
                <FooterNavBar>
                    {listFooter.map(list =>{
                        return (
                            <FooterNavBarList key={list.title}>
                                 <h1>{list.title}</h1>
                                 <ul>
                                    {list.list.map(listItem =>{
                                        return (
                                            <li key={listItem.name}>
                                                <a href={listItem.link} target="_blank">
                                                    {listItem.name}
                                                </a>
                                            </li>
                                        )
                                    })}
                                 </ul>
                            </FooterNavBarList>
                        )
                    })}
                    <FooterContact>
                        <h1>Siga a Leadster</h1>
                        <FooterContactSocialMedia>
                                <a href={socialMedia.linkedin.link} target="_blank">
                                        <Image
                                            src={linkedinIcon}
                                            alt={`Clique para ir para nosso LinkedIn`}
                                            width={30}
                                            height={30}
                                        />
                                </a>
                                <a href={socialMedia.facebook.link} target="_blank">
                                        <Image
                                            src={FacebookIcon}
                                            alt={`Clique para ir para nosso Facebook`}
                                            width={30}
                                            height={30}
                                        />
                                </a>
                                <a href={socialMedia.instagram.link} target="_blank">
                                        <Image
                                            src={InstagramIcon}
                                            alt={`Clique para ir para nosso Instagram`}
                                            width={30}
                                            height={30}
                                        />
                                </a>
                        </FooterContactSocialMedia>
                            <span>Email: 
                                <a href={email.link} target="_blank"> {email.name}</a> 
                            </span>  
                            
                            <span>Telefone: 
                                <a href={telephone.link} target="_blank"> {telephone.name}</a>
                            </span>
                    </FooterContact>
                </FooterNavBar>
                <FooterCopyright>
                    <span>Copyright © 2015 - 2022 Todos os direitos reservados | 
                        <a href="https://leadster.com.br/" target="_blank">
                            Leadster
                        </a>
                    </span>
                    <span>
                        Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | 
                        <a href="https://leadster.com.br/termos_de_uso/"> Termos de uso </a>
                        |
                        <a href="https://leadster.com.br/privacidade/"> Privacidade</a>
                    </span>
                </FooterCopyright>
            </FooterContent>
        </FooterContainer>
    );
}
import Image from "next/image";
import { SeeDemoContainer, SeeDemoContent, SeeDemoContentAction, SeeDemoContentFlex } from "./styles";
import imageSeeDemo from '../../assets/comparativo_img_CTA.png';
import imageSeloRD from '../../assets/selo_RD.png';
import iconNoCard from '../../assets/no-card-dark.webp';
import iconRating from '../../assets/rating.webp';

export function SeeDemoComponent(){
    
    return (
            <SeeDemoContainer>
                <SeeDemoContent>
                    <Image
                        className="img"
                        src={imageSeeDemo}
                        alt='Image de comparativo de formulário, botão whatsapp e da LeadSter'
                    />
                    <SeeDemoContentAction>
                        <h1>Pronto para triplicar sua <br/>
                           <strong>Geração de Leads?</strong>
                        </h1>
                        <p>Criação e ativação em <strong>4 minutos.</strong></p>

                        <SeeDemoContentFlex className="mobile">
                            <button>
                                Ver Demonstração
                            </button>
                            <Image 
                                src={imageSeloRD}
                                alt='Selo RD Station de TOP 10 de App mais usado'
                            />
                        </SeeDemoContentFlex>
                        <SeeDemoContentFlex className="mobile">
                                <SeeDemoContentFlex>
                                    <Image 
                                        src={iconNoCard}
                                        alt='Icone de cartão de credito cortado por traço'
                                    />
                                    <span>
                                        <strong>Não </strong>
                                        é necessário Cartão de Crédito | 
                                    </span>
                                </SeeDemoContentFlex>
                                <SeeDemoContentFlex>
                                    <Image 
                                        src={iconRating}
                                        alt='Icone de 5 estrelas de avaliação'
                                    />
                                    <span>
                                        <strong>4.9</strong>
                                    /5 média de satisfação
                                    </span>
                                    </SeeDemoContentFlex>
                        </SeeDemoContentFlex>
                    </SeeDemoContentAction>
                </SeeDemoContent>
            </SeeDemoContainer>
    );
}
"use-client"
import Image from "next/image";
import logoImg from "../../assets/logo.png";
import { HeaderContainer, Logo } from "./styles";

export function Header(){
    return (
        <HeaderContainer >
            <Logo href="#">
                <Image 
                    src={logoImg}
                    alt="Logo leadster"
                    priority={false} 
                />
            </Logo>
        </HeaderContainer>
    )
}
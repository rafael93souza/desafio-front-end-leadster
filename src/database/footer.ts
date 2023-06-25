import { FooterDatabase } from "@/@types/footer-type";
import FacebookIcon from '../assets/facebook.svg';
import InstagramIcon from '../assets/instagram.svg';
import linkedinIcon from '../assets/linkedIn.svg';

const footerDatabase: FooterDatabase = {
    listFooter:[
        {   
            title:'Links Principais',
            list:[
                {name:'Home', link:'https://leadster.com.br/'},
                {name:'Ferramenta', link:'https://leadster.com.br/como-funciona/'},
                {name:'Preços', link:'https://leadster.com.br/preco/'},
                {name:'Contato', link:'https://leadster.com.br/contato/'},
            ]
         },
        {   
            title:'Cases',
            list:[
                {name:'Geração de Leads B2B', link:'https://leadster.com.br/geracao-de-leads/b2b/'},
                {name:'Geração de Leads em Software', link:'https://leadster.com.br/geracao-de-leads/software/'},
                {name:'Geração de Leads em imobiliária', link:'https://leadster.com.br/geracao-de-leads/imobiliaria/'},
                {name:'Cases de Sucesso', link:'https://leadster.com.br/estudo-de-caso/'},
            ]
         },
        {   
            title:'Materiais',
            list:[
                {name:'Blog', link:'https://leadster.com.br/blog/'},
                {name:'Parceria com Agências', link:'https://leadster.com.br/agencias-parceiras/programa/'},
                {name:'Guia Definitivo do Marketing', link:'https://leadster.com.br/marketing-conversacional/'},
                {name:'Materiais Gratuitos', link:'https://leadster.com.br/materiais/'},
            ]
         }
    ],

    contact:{
        email: {
            name:'contato@leadster.com.br',
            link:'mailto:contato@leadster.com.br'
        },
        telephone:{
            name:'(41) 99232-3368',
            link:'https://wa.me/5541992323368'
        },
        socialMedia:{
            linkedin:{
                name: 'LinkedIn', 
                link:'https://www.linkedin.com/company/leadster-platform',
            },
            facebook:{
                name: 'Facebook', 
                link:'https://www.facebook.com/leadsterplatform', 

            },
           instagram: {
                name: 'Instagram', 
                link:'https://www.instagram.com/leadster.com.br', 
            }
        }
    }
}

export default footerDatabase;
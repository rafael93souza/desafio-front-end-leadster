import { Video } from "@/@types/video-type";
import { randomUUID } from "crypto";

const databaseVideos:Video[] = [];

for (let index = 1; index < 10; index++) {
    databaseVideos.push({
        title:'Como aumentar a sua geração de Leads feat. Traktor',
        id:randomUUID(),
        description: 'Lorem ipsum dolor sit amet, consectetur adip',
        url: 'https://www.youtube.com/embed/EW6QAM4ypVE'
    },
    {
        title:'A importância do Benchmark e Networking na estratégia de Marketing Digital',
        id:randomUUID(),
        description: 'Neste corte da mentoria "Os passos do Marketing Digital para Startups", Gustavo Luby (Leadster) fala sobre a importância de acompanhar números do mercado e fazer networking para sua estratégia de Marketing Digital.',
        url: 'https://www.youtube.com/embed/EW6QAM4ypVE'
    },
    {
        title:'Como surgiu a Leadster e os desafios de Empreender na área de Tecnologia',
        id:randomUUID(),
        description: 'Neste corte da mentoria "Os passos do Marketing Digital para Startups", Gustavo Luby (Leadster) explica importância de encontrar um equilíbrio entre estratégias de curto e longo prazo no Marketing Digital.',
        url: 'https://www.youtube.com/embed/eGIQT6AdvS8'
    },
    {
        title:'Estratégias de curto e longo prazo no Marketing Digital',
        id:randomUUID(),
        description: 'Neste corte da mentoria "Os passos do Marketing Digital para Startups", Gustavo Luby (Leadster) apresenta o histórico da Leadster, primeira plataforma de Marketing Conversacional do Brasil, e fala sobre os desafios de empreender na área de tecnologia.',
        url: 'https://www.youtube.com/embed/PHAfkczqlMY'
    },
    {
        title:'Mercado, Produto, Modelo e Canais - O Mix de variáveis do Marketing Digital',
        id:randomUUID(),
        description: 'Neste corte da mentoria "Os passos do Marketing Digital para Startups", Gustavo Luby (Leadster) demonstra como o mix de variáveis do Marketing Digital afeta o seu negócio.',
        url: 'https://www.youtube.com/embed/aT88TbvdPEY'
    },)
    
}

export default databaseVideos;
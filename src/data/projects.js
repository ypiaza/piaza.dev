import auralabImg from '../assets/auralab.png';
import crivusImg from '../assets/crivus.png';
import advImg from '../assets/adveass.png';
import clinica from '../assets/clinicaprot.png'

export const projects = [
    {
        title: 'Clinica Prototype',
        category: 'Institucional',
        image: clinica,
        description: 'Autoridade e profissionalismo para clínicas',
        link:'https://clinicaprot.vercel.app/',
        tags: ['Website', 'Conversão']
    },
    {
        title: 'Advogados & Associados',
        category: 'Institucional',
        image: advImg,
        description: 'Autoridade e profissionalismo para advogados',
        link:'https://advogadosassociados.vercel.app/',
        tags: ['Website', 'Institucional']
    },
    {
        title: 'AuraLab',
        category: 'Landing Page',
        image: auralabImg,
        description: 'Conversão otimizada',
        link: 'https://auralab-three.vercel.app/',
        tags: ['Marketing', 'Conversão']
    },
    {
        title: 'Crivus Digital',
        category: 'Web Design',
        image: crivusImg,
        description: 'Layout intuitivo',
        link: 'https://crivusdigital.vercel.app/',
        tags: ['Plataforma', 'Portifolio']
    }
];
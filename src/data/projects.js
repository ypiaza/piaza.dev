import auralabImg from '../assets/auralab.png';
import crivusImg from '../assets/crivus.png';
import advImg from '../assets/adveass.png';

export const projects = [
    {
        title: 'Advogados & Associados',
        category: 'Institucional',
        image: advImg,
        description: 'Autoridade e profissionalismo para advogados',
        link:'https://advogadosassociados.vercel.app/'
    },
    {
        title: 'AuraLab',
        category: 'Landing Page',
        image: auralabImg, // Use a variável importada
        description: 'Conversão otimizada',
        link: 'https://auralab-three.vercel.app/'
    },
    {
        title: 'Crivus Digital',
        category: 'Web Design',
        image: crivusImg,
        description: 'Layout intuitivo',
        link: 'https://crivusdigital.vercel.app/'
    }
];

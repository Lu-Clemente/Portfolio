import { faGithub, faLinkedinIn, faGoogle, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { ILinksdata } from '../Interfaces/ILinksData';

export const linksData: Array<ILinksdata> = [
    {
        icon: faLinkedinIn,
        link: "https://www.linkedin.com/in/luciene-clemente",
        label: "/luciene-clemente"
    },
    {
        icon: faGithub,
        link: "https://github.com/Lu-Clemente",
        label: "/Lu-Clemente"
    },
    {
        icon: faGoogle,
        link: "mailto:luclemente.dev@gmail.com",
        label: "luclemente.dev@gmail.com"
    },
    {
        icon: faCodepen,
        link: "https://codepen.io/Lu-Clemente",
        label: "/Lu-Clemente"
    },
];
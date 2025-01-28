import Js from '../../public/assets/js.png';
import Ts from '../../public/assets/ts.png';
import ReactIcon from '../../public/assets/react.png';
import Mysql from '../../public/assets/sql.png';
import Npm from '../../public/assets/npm.png';
import Git from '../../public/assets/git.png';
import GitHub from '../../public/assets/github.png';
import Css from '../../public/assets/css.png';
import Html from '../../public/assets/html.png';
import StyledIco from '../../public/assets/styles.png';
import Material from '../../public/assets/iu.png';
import Sass from '../../public/assets/sass.png';
import Next from '../../public/assets/next.png';
import Node from '../../public/assets/node.png';
import Vite from '../../public/assets/vite.png';
import Office from '../../public/assets/office.png';

import { StaticImageData } from 'next/image';

export interface SkillData {
    id: string;
    image: StaticImageData;
}

export const data: SkillData[] = [
    { id: '1', image: Js },
    { id: '2', image: Html },
    { id: '3', image: ReactIcon },
    { id: '4', image: Mysql },
    { id: '5', image: Next },
    { id: '6', image: Git },
    { id: '7', image: GitHub },
    { id: '8', image: Css },
    { id: '9', image: Sass },
    { id: '10', image: Node },
    { id: '11', image: Npm },
    { id: '12', image: Vite},
    { id: '13', image: Office},
    { id: '14', image: Ts},
    { id: '15', image: Material},
    { id: '16', image: StyledIco}

];

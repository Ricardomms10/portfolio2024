import Js from '../../public/assets/js.png';
import Mysql from '../../public/assets/sql.png';
import Npm from '../../public/assets/npm.png';
import Git from '../../public/assets/git.png';
import GitHub from '../../public/assets/github.png';
import Sass from '../../public/assets/sass.png';
import Next from '../../public/assets/next.png';
import Node from '../../public/assets/node.png';
import Office from '../../public/assets/office.png';
import Excel from '../../public/assets/excel.png';
import Python from '../../public/assets/python.png';
import { StaticImageData } from 'next/image';

export interface SkillData {
    id: string;
    image: StaticImageData;
}

export const data: SkillData[] = [
    { id: '1', image: Js },
    { id: '2', image: Mysql },
    { id: '3', image: Next },
    { id: '4', image: Git },
    { id: '5', image: GitHub },
    { id: '6', image: Sass },
    { id: '7', image: Node },
    { id: '8', image: Npm },
    { id: '9', image: Office },
    { id: '10', image: Excel },
    { id: '11', image: Python },    
];

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';
import style from '../styles/Choice.module.scss';
import Link from 'next/link';

interface ChoiceProps { }

const Choice: React.FC<ChoiceProps> = () => {
    return (
        <div className={style.container}>
            <h1>PROJETOS</h1>
            <div className={style.buttonGroup}>
                <button>
                    <FontAwesomeIcon icon={faCode} style={{ marginRight: '0.5rem' }} />
                    <Link href="/Projeto"> Web Developer</Link>
                </button>
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlassChart} />
                    <Link href="/Projeto"> Data Analyst</Link>
                </button>
            </div>
        </div>
    );
};

export default Choice;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';
import style from '../styles/Choice.module.scss';

interface ChoiceProps { }

const Choice: React.FC<ChoiceProps> = () => {
    return (
        <div className={style.container}>
            <h1>PROJETOS</h1>
            <div className={style.buttonGroup}>
                <button>
                    <FontAwesomeIcon icon={faCode} style={{ marginRight: '0.5rem' }} />
                    <a href="/Projeto"> Web Developer</a>
                </button>
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlassChart} />
                    <a href="/Projeto"> Data Analyst</a>
                </button>
            </div>
        </div>
    );
};

export default Choice;

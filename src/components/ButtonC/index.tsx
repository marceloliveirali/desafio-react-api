import {Link} from 'react-router-dom';
import './styles.css';

function ButtonC() 
{
    return (
        <>
            <Link to="/findProfile">
                <button className='buttonC'>
                    Começar
                </button>
            </Link>
        </>
    );
}

export default ButtonC;

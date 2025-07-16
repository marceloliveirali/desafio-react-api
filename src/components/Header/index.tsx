import { Link } from 'react-router-dom';
import './styles.css';

function Header() 
{
    return (
        <>
            <Link to="/" className='header-link'>
                <header>
                    <h1>Github API</h1>
                </header>
            </Link>
            
        </>
    );
}

export default Header;
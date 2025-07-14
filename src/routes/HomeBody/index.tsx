import Box from '../../components/Box';
import ButtonC from '../../components/ButtonC';
import './styles.css';

function HomeBody() 
{
    return (
        <>
            <h1 className='homeBodyH1'>Desafio Github API</h1>
            <p className='homeBodyP'>DevSuperior - Escola de programação</p>
            <ButtonC />
            <Box />
        </>
    );
}

export default HomeBody;
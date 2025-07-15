import Box from '../../components/Box';
import BoxCard from '../../components/BoxCard';
import ButtonC from '../../components/ButtonC';
import NotFound from '../NotFound';
import './styles.css';

function HomeBody() 
{
    return (
        <>
            <h1 className='homeBodyH1'>Desafio Github API</h1>
            <p className='homeBodyP'>DevSuperior - Escola de programação</p>
            <ButtonC />
            <Box />
            <BoxCard />
            <NotFound />
        </>
    );
}

export default HomeBody;
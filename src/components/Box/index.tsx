import {useEffect, useState} from 'react';
import ButtonE from '../ButtonE';
import './styles.css';
import axios from 'axios';
import BoxCard from '../BoxCard';

function Box() 
{
    const [value, setValue] = useState('');   
    const [shouldSearch, setShouldSearch] = useState(false); // novo estado
    const [viewBoxCard, setViewBoxCard] = useState<boolean>(false);
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {

        if (!shouldSearch || value.trim() === '') return;

        axios.get(`https://api.github.com/users/${value}`)
            .then(response => {
                if (response.status === 200)
                {
                    setViewBoxCard(true);
                }
            })
            .catch(error => {
                console.log(error.response.data);
                setViewBoxCard(false);
            })
            .finally(() => {
                setShouldSearch(false); // resetar após a busca
                setHasSearched(true);
            });
    }, [shouldSearch, value]);

    function handleSubmit(event: React.FormEvent)
    {
        event.preventDefault();
        setShouldSearch(true); //aciona a busca no useEffect
    }

    return (
        <>
            <div className='container-box'>
                <form onSubmit={handleSubmit}>
                    <label className='label-box'>
                        <p className='text-label1'>Encontre um perfil Github</p>
                        <input 
                            className='input1' 
                            type="text" 
                            value={value} 
                            placeholder='Usuário Github'
                            onChange={event => setValue(event.target.value)}
                        />
                    </label>
                    <ButtonE />
                </form>
            </div>
            {
                hasSearched && (
                    viewBoxCard
                    ? <BoxCard username={value} />
                    : <h1>Erro ao Buscar usuários</h1>
                )    
            }
        </>
    );
}

export default Box;


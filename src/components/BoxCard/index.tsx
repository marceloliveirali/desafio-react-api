import {useEffect, useState} from 'react';
import './styles.css';
import axios from 'axios';

type Props = {
    username: string;
}

function BoxCard({ username }: Props) 
{
    const [informationData, setInformationData] = useState({
        url: '',
        following: '',
        location: '',
        name: '',
        avatar_url: ''
    });

    useEffect(() => {
        axios.get(`https://api.github.com/users/${username}`)
            .then(response => {
                const { html_url, following, location, name, avatar_url  } 
                    = response.data;
                setInformationData({
                    url: html_url,
                    following,
                    location,
                    name,
                    avatar_url
                });
            })
            .catch(error => {
                console.error('Erro ao buscar dados do GitHub: ', error);
            })

    }, [username]);

    return (
        <>
            <div className="container-boxCard"> 
                <div className="img-boxCard">
                    <img src={informationData.avatar_url} alt="avatar" />
                </div>
                <form className='form-boxCard'>
                    <p className='text-form'>Informações</p>
                    <div className='square'>
                        <label className='label-boxCard'>Perfil:</label>
                        <input 
                            type="text" 
                            value={informationData.url}
                            readOnly
                            className='input-box' 
                        />
                    </div>
                    <div className='square'>
                        <label className='label-boxCard'>Seguidores:</label>
                        <input 
                            type="text" 
                            value={informationData.following}
                            readOnly
                            className='input-box' />
                    </div>
                    <div className='square'>
                        <label className='label-boxCard'>Localidade:</label>
                        <input 
                            type="text" 
                            value={informationData.location}
                            readOnly
                            className='input-box' 
                        />
                    </div>
                    <div className='square'>
                        <label className='label-boxCard'>Nome:</label>
                        <input 
                            type="text" 
                            value={informationData.name}
                            readOnly
                            className='input-box' 
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default BoxCard;

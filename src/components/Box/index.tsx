import ButtonE from '../ButtonE';
import './styles.css';

function Box() 
{
    return (
        <>
            <div className='container-box'>
                <form>
                    <label className='label-box'>
                        <p className='text-label1'>Encontre um perfil Github</p>
                        <input className='input1' type="text" name="" id="" placeholder='Usuário Github' />
                    </label>
                    <ButtonE />
                </form>
            </div>
        </>
    );
}

export default Box;
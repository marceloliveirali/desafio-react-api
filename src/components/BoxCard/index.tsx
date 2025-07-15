import './styles.css';

function BoxCard() 
{
    return (
        <>
            <div className="container-boxCard"> 
                <div className="img-boxCard">
                    <img src="" alt="" />
                </div>
                <form className='form-boxCard'>
                    <p className='text-form'>Informações</p>
                    <div className='square'>
                        <label className='label-boxCard'>Perfil:</label>
                        <input type="text" name="" id="" className='input-box' />
                    </div>
                    <div className='square'>
                        <label className='label-boxCard'>Seguidores:</label>
                        <input type="text" name="" id="" className='input-box' />
                    </div>
                    <div className='square'>
                        <label className='label-boxCard'>Localidade:</label>
                        <input type="text" name="" id="" className='input-box' />
                    </div>
                    <div className='square'>
                        <label className='label-boxCard'>Nome:</label>
                        <input type="text" name="" id="" className='input-box' />
                    </div>
                </form>
            </div>
        </>
    );
}

export default BoxCard;
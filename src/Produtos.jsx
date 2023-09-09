import {} from 'react'

function Produtos(){
    return(
        <>
            <div className='produtos-container'>

                <section className='produtos-section'>
                    <div className='produtos-item'>
                        <img src='src/assets/bob.png.jpg' className='produtos-imagem'></img>
                        <p className='produtos-titulo'>Casa do bob esponja</p>
                    </div>
                    <div className='produtos-item'>
                        <img src='src/assets/suricatinho bebe.png.jpg' className='produtos-imagem'></img>
                        <p className='produtos-titulo'>Suricatinho</p>
                    </div>
                </section>

                <section className='produtos-section'>
                    <div className='produtos-item'>
                        <img src='src/assets/perry2.png' className='produtos-imagem'></img>
                        <p className='produtos-titulo'>Pery o ornintorrinco</p>
                    </div>
                    <div className='produtos-item'>
                        <img src='src/assets/coala.webp' className='produtos-imagem'></img>
                        <p className='produtos-titulo'>Coala</p>
                    </div> 
                </section>
            </div>
        </>
    )
}

export default Produtos
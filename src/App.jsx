import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import ImageCripto from './img/criptos.png'
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

const Contenedor = styled.div`
background-image: radial-gradient(#3f4152 10%,#2d2f3b 70% );
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`
const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 300px;
    height: 2px;
    background-color: #fadb84;
    display: block;
    margin: 10px auto 0 auto;

  }
`

function App() {

  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [img, setImg] = useState('')
  
  useEffect(()=>{
    if (Object.keys(monedas).length > 0){
      
      const cotizarCripto = async () => {
        const { moneda, criptomoneda } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setResultado(resultado.DISPLAY[criptomoneda][moneda])
        setImg(`https://www.cryptocompare.com${resultado.DISPLAY[criptomoneda][moneda].IMAGEURL}`)

      }
      cotizarCripto()
    }
  }, [monedas])
  
  return (
    <Contenedor>
      <Imagen
        src={img === '' ? ImageCripto : img}
        alt={'...'} 
      />
      
      <div>
        <Heading>Cotizador de criptomonedas</Heading>
        <Formulario 
          setMonedas={setMonedas}
        />
        {resultado.PRICE && <Resultado resultado={resultado}/>}
      </div>

    </Contenedor>

  )
}

export default App

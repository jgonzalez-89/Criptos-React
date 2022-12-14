import { useState } from 'react'
import styled from '@emotion/styled'
import ImageCripto from './img/criptos.png'
import Formulario from './components/Formulario';

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
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

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
`;


function App() {


  return (
    <Contenedor>
      <Imagen
        src={ImageCripto}
        alt={'...'} />
      <div>
        <Heading>Cotizador de criptomonedas</Heading>
        <Formulario />
      </div>
    </Contenedor>

  )
}

export default App

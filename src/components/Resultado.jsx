import React from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    align-items: center;
    gap: 3rem;

`
const Imagen = styled.img`
    display: block;
    width: 150px;
    

`
const Texto = styled.p`
    font-size: 18px;
    span { 
        font-weight: 700;
        color: #746936;
        padding: 10px ;
    }

`
const Precio = styled.p`
    font-size: 30px;
    span { 
        font-weight: 700;
        color: #fde07f;
        padding: 10px ;
    }

`
const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
   
    // console.log(resultado)
  return (
    <Contenedor>
        {/* <Imagen src={`https://www.cryptocompare.com${IMAGEURL}`} alt="..." /> */}
        
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>El precio más alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>El precio más bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Variacion últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
        
    </Contenedor>
  )
}

export default Resultado
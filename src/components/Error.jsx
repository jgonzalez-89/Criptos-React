import React from 'react'
import styled from '@emotion/styled'

//Añadiendo Styled Component a Texto
const Texto = styled.div`
    background-color: #933333;
    color: #fff;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`
// Muestra un mensaje de Error si los campos no son requeridos.
const Error = ({children}) => {
  return (
    <Texto>
        {children}
    </Texto>
  )
}

export default Error
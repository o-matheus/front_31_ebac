import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
    text-decoration: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const ContainerMain = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 18px;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`

export const BotaoCard = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(BotaoCard)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal

import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './style'
import { BotaoSalvar, ContainerMain, Titulo } from '../../styles'
import { Campo } from '../../styles'
import * as enums from '../../utils/enums/tarefa'
import Tarefa from '../../models/Tarefa'
import { cadastrar } from '../../store/reducers/tarefa'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }
  return (
    <ContainerMain>
      <Titulo>Nova Tarefa</Titulo>
      <S.Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <S.Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <S.Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
                onChange={({ target }) =>
                  setPrioridade(target.value as enums.Prioridade)
                }
              />
              <label htmlFor={prioridade}>{prioridade}</label>
            </S.Opcao>
          ))}
        </S.Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </S.Form>
    </ContainerMain>
  )
}

export default Formulario

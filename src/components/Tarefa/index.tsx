import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enums/tarefa'
import { remover, editar, alteraStatus } from '../../store/reducers/tarefa'
import TarefaClass from '../../models/Tarefa'
import { BotaoSalvar, BotaoCard } from '../../styles'

type PropsCard = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: PropsCard) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  function salvarEdicao() {
    dispatch(editar({ titulo, prioridade, status, descricao, id }))
    setEstaEditando(false)
  }

  function alterarStatusTarefa(e: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        finalizado: e.target.checked
      })
    )
  }
  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          checked={status === enums.Status.CONCLUIDA}
          id={titulo}
          onChange={alterarStatusTarefa}
        />
        <S.TituloCard>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.TituloCard>
      </label>
      <S.TagCard parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.TagCard>
      <S.TagCard parametro="status" status={status}>
        {' '}
        {status}{' '}
      </S.TagCard>
      <S.DescricaoCard
        disabled={!estaEditando}
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <S.BarraAcoesCard>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={salvarEdicao}>Salvar</BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <BotaoCard onClick={() => setEstaEditando(true)}>Editar</BotaoCard>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoesCard>
    </S.Card>
  )
}

export default Tarefa

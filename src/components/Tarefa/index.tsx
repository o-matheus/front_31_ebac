import { useState } from 'react'
import * as S from './styles'

import * as enums from '../../utils/enums/tarefa'

type PropsCard = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

const Tarefa = ({ titulo, prioridade, status, descricao }: PropsCard) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.TituloCard>{titulo}</S.TituloCard>
      <S.TagCard parametro="prioridade" prioridade={prioridade}>
        {' '}
        {prioridade}{' '}
      </S.TagCard>
      <S.TagCard parametro="status" status={status}>
        {' '}
        {status}{' '}
      </S.TagCard>
      <S.DescricaoCard value={descricao} />
      <S.BarraAcoesCard>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.BotaoCard onClick={() => setEstaEditando(true)}>
              Editar
            </S.BotaoCard>
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoesCard>
    </S.Card>
  )
}

export default Tarefa

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './style'
import * as enums from '../../utils/enums/tarefa'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import { BotaoCard, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  function voltarHome() {
    navigate('/')
  }
  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="Pendentes"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="Concluídas"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="Urgentes"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="Importantes"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="Normais"
              />
              <FiltroCard criterio="todas" legenda="Todas" />
            </S.Filtros>
          </>
        ) : (
          <BotaoCard onClick={voltarHome} type="button">
            Voltar a lista de tarefas
          </BotaoCard>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral

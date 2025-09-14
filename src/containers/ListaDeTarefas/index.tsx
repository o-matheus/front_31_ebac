import { useSelector } from 'react-redux'

import * as S from './style'
import Tarefa from '../../components/Tarefa'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <S.ContainerMain>
      <h2>
        2 tarefas encontradas com &quot;categoria&quot; e &quot;termo&quot;
      </h2>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
              titulo={t.titulo}
            />
          </li>
        ))}
      </ul>
    </S.ContainerMain>
  )
}

export default ListaDeTarefas

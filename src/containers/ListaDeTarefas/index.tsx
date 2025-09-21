import { useSelector } from 'react-redux'

import * as S from '../../styles/index'
import Tarefa from '../../components/Tarefa'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtrarTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const textoPesquisa = (quantidade: number) => {
    let mensagem = ''
    const complemento =
      termo !== undefined && termo.length > 0 ? ` com o termo '${termo}'` : ''

    if (quantidade <= 0)
      return (mensagem = 'Nenhuma tarefa foi encontrada') + complemento
    else if (quantidade == 1 && criterio !== 'todas')
      return (mensagem =
        `${quantidade} tarefa "${valor}" encontrada` + complemento)
    else if (quantidade > 1 && criterio !== 'todas')
      return (mensagem =
        `${quantidade} tarefas "${valor}s" encontradas` + complemento)
    else if (quantidade == 1 && criterio === 'todas')
      return (mensagem = 'Você possui uma tarefa registrada' + complemento)
    // eslint-disable-next-line prettier/prettier
    else
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      return (mensagem =
        `Você possui ${quantidade} tarefas registradas` + complemento)
  }

  const tarefas = filtrarTarefas()
  const mensagem = textoPesquisa(tarefas.length)
  return (
    <S.ContainerMain>
      <S.Titulo as="p">{mensagem}</S.Titulo>
      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>
            <Tarefa
              id={t.id}
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

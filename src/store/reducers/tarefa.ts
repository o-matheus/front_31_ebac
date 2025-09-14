import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/tarefa'
import Tarefa from '../../models/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar JavaScript',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      'Ler documentação do MDN',
      1
    ),
    new Tarefa(
      'Estudar TypeScript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDA,
      'Ler documentação TypeScript  ',
      2
    ),
    new Tarefa(
      'Estudar React',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Ler documentação React',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer

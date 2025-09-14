import { configureStore } from '@reduxjs/toolkit'
import tarefaReducer from './reducers/tarefa'

const store = configureStore({
  reducer: {
    tarefas: tarefaReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store

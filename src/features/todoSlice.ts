import { createSlice } from '@reduxjs/toolkit'

interface todo {
  todoList: object
}

const initialState: todo = {
  todoList: {
    demo: {
      category: 'Personal',
      task: 'asv',
      status: 'pending',
      location: 'sda',
      date: '22-04-2024',
    },
  },
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const date = action.payload.date
      state.todoList[date] = action.payload
    },

    removeTodo: (state, action) => {
      const valueToRemove = action.payload
      delete state[valueToRemove]
    },
  },
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer

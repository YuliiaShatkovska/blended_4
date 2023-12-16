import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      prepare: (text) => {
        const todo = {
          id: nanoid(),
          text,
        };

        return {
          payload: todo,
        };
      },
      reducer: (state, { payload }) => {
        state.todos.push(payload);
      },
    },

    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter(todo => todo.id !== payload)
    },
    updateTodo: (state, { payload }) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === payload.id) {
          todo.text = payload.text
          return todo
        } return todo
      })
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;

export const todoReducer = todosSlice.reducer;

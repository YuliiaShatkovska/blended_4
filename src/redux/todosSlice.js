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

    deleteTodo: (state, { payload }) => {},
    updateTodo: (state, { payload }) => {},
  },
});

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;

export const todoReducer = todosSlice.reducer;

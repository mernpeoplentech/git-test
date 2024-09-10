import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todolist: [],
};
export const Todoslice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      state.todolist.push(action.payload);
    },
    deletetodo: (state, action) => {
      state.todolist = state.todolist.filter(
        (item) => item?._id !== action.payload
      );
    },
    removeTodo: (state) => {
      state.todolist = [];
    },
  },
});

export const { addtodo, deletetodo, removeTodo } = Todoslice.actions;
export default Todoslice.reducer;

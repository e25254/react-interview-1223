//  新增：
export const addTodo = (v) => ({
  type: 'ADD_TODO',
  payload: v,
});

//  刪除：
export const delTodo = (v) => ({
  type: 'DEL_TODO',
  payload: v,
});

//  是否完成：
export const doneTodo = (v) => ({
  type: 'DONE_TODO',
  payload: v,
});

//  新增：
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: { text },
});

//  刪除：
export const delTodo = (uuid) => ({
  type: 'DEL_TODO',
  payload: { uuid },
});

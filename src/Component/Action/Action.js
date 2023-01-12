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

//  是否編輯中：
export const editing = (v) => ({
  type: 'EDITING',
  payload: v,
});

//  編輯過後的文字：
export const editValue = (v, text) => ({
  type: 'EDITVALUE',
  payload: { v, text },
});

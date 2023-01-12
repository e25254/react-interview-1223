import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
// const initState = [
//   {
//     todo: 'Learn React.js',
//     create_time: dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss'),
//     done: false,
//     uuid: uuidv4(),
//   },
//   {
//     todo: 'Learn Angular.js',
//     create_time: dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss'),
//     done: false,
//     uuid: uuidv4(),
//   },
//   {
//     todo: 'Learn Vue.js',
//     create_time: dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss'),
//     done: false,
//     uuid: uuidv4(),
//   },
//   {
//     todo: 'Learn Node.js',
//     create_time: dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss'),
//     done: false,
//     uuid: uuidv4(),
//   },
// ];
const todoReducer = (
  state = JSON.parse(window.localStorage.getItem('myTodoList')),
  action
) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          todo: action.payload,
          create_time: dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss'),
          editing: false,
          done: false,
          uuid: uuidv4(),
        },
      ];

    case 'DEL_TODO':
      return state.filter((todoItem) => {
        return todoItem.uuid !== action.payload.uuid;
      });

    case 'DONE_TODO':
      const isDone = state.map((v) => {
        if (v.uuid === action.payload.uuid) {
          return { ...v, done: !v.done };
        }
        return { ...v };
      });
      return isDone;

    case 'EDITING':
      // console.log('要編輯了', action.payload.todo);
      const isEdit = state.map((v) => {
        if (v.uuid === action.payload.uuid) {
          return { ...v, editing: !v.editing };
        }
        return { ...v, editing: false };
      });
      return isEdit;

    case 'EDITVALUE':
      // console.log(action.payload.v.uuid, action.payload.text);
      const editValueState = state.map((v) => {
        if (v.uuid === action.payload.v.uuid) {
          return { ...v, todo: action.payload.text, editing: false };
        }
        return { ...v };
      });
      return editValueState;

    default:
      //  預防編輯到一半的時候重新整理 讓網頁一進去就把所有的editing變成false
      return state.map((v) => {
        return { ...v, editing: false };
      });
  }
};
export default todoReducer;

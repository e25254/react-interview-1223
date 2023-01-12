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
          done: false,
          uuid: uuidv4(),
        },
      ];

    case 'DEL_TODO':
      return state.filter((todoItem) => {
        return todoItem.uuid !== action.payload.uuid;
      });

    case 'DONE_TODO':
      const newTodo = state.map((v) => {
        if (v.uuid === action.payload.uuid) {
          return { ...v, done: !v.done };
        }
        return { ...v };
      });
      return newTodo;

    default:
      return state;
  }
};
export default todoReducer;

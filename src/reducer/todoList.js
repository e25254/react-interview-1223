import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
const initState = [
  {
    todo: 'Learn React.js',
    create_time: dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss'),
    done: false,
    uuid: uuidv4(),
  },
  {
    todo: 'Learn Angular.js',
    create_time: dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss'),
    done: false,
    uuid: uuidv4(),
  },
  {
    todo: 'Learn Vue.js',
    create_time: dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss'),
    done: false,
    uuid: uuidv4(),
  },
  {
    todo: 'Learn Node.js',
    create_time: dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss'),
    done: false,
    uuid: uuidv4(),
  },
];
const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case action.ADD_TODO:
      return [
        ...state,
        {
          todo: 'Learn Node.js',
          create_time: dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss'),
          done: false,
          uuid: uuidv4(),
        },
      ];
    default:
      return state;
  }
};
export default todoReducer;

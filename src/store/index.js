import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Reducer/Reducer';
const allReducer = combineReducers({
  TodoList: todoReducer,
});
const store = configureStore({ reducer: allReducer });

export default store;

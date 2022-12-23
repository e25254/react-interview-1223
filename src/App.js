import logo from './logo.svg';
import './App.css';
import { AllContextProvider } from './Component/AllContext/AllContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './TodoList/TodoList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

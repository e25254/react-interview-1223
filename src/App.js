import './App.css';
import { AllContextProvider } from './Component/AllContext/AllContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './style.scss';

function App() {
  return (
    <>
      <AllContextProvider>
        <BrowserRouter basename="/react-interview-1223">
          <Routes>
            <Route index path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AllContextProvider>
    </>
  );
}

export default App;

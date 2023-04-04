// import logo from './logo.svg';
import './App.css';
import Register from './components/register/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import { createContext, useState } from 'react';
import MyTwitterTimeline from './components/twitter/twitter';
export const tokenStorage = createContext();

function App() {
  const [token, setToken] = useState(null);
  return (
    <div className="App">
      <tokenStorage.Provider value={[token,setToken]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/timeline' element={<MyTwitterTimeline/>} />
        </Routes>
      </BrowserRouter>
      </tokenStorage.Provider>
    </div>
  );
}

export default App;

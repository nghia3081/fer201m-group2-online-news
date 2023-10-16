import logo from './logo.svg';
import './App.css';
import HomePage from './pages/user/home';
import Login from './pages/user/login';
import Register from './pages/user/register';
import UserPage from './pages/user';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPage from './pages/admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserPage></UserPage>}></Route>
        <Route path='/manage/*' element={<AdminPage></AdminPage>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

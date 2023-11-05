
import './App.css';
import UserPage from './pages/user';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPage from './pages/admin';

function App() {
  return (
    <BrowserRouter>
      <div className=' position-relative'>

        <Routes>
          <Route path='/*' element={<UserPage></UserPage>}></Route>
          <Route path='/manage/*' element={<AdminPage></AdminPage>}></Route>
        </Routes>
      </div>

    </BrowserRouter>

  );
}

export default App;

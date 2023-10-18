
import './App.css';
import UserPage from './pages/user';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPage from './pages/admin';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useState } from 'react';

function App() {
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  return (
    <BrowserRouter>
      <div className=' position-relative'>
        <ToastContainer
          className="p-3"
          position= 'top-end'
          style={{ zIndex: 1 }}
        >
          <Toast show={showA} onClose={toggleShowA} delay={3000} autohide>
            <Toast.Header >
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
          </Toast>

        </ToastContainer>

        <Routes>
          <Route path='/*' element={<UserPage></UserPage>}></Route>
          <Route path='/manage/*' element={<AdminPage></AdminPage>}></Route>
        </Routes>
      </div>

    </BrowserRouter>

  );
}

export default App;

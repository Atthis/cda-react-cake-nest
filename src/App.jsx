import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.min.css';

import Login from './views/login/Login';
import ShopPage from './views/shopPage/ShopPage';
import Error404 from './views/error404/Error404';
import { CupcakeDataContext } from './context/CupcakeDataContext';
import { UserContext } from './context/UserContext';

import { fakeMenu } from '../fakeData/fakeMenu';

function App() {
  // Data
  const [username, setUsername] = useState('');
  const [cupcakeData, setCupcakeData] = useState(fakeMenu);

  return (
    <>
      <UserContext.Provider value={{ username, setUsername }}>
        <CupcakeDataContext.Provider value={{ cupcakeData, setCupcakeData }}>
          <Router>
            <Routes>
              <Route path='/' element={<Login username={username} setUsername={setUsername} />} />
              <Route path='/commandes' element={<ShopPage username={username} setUsername={setUsername} />} />
              <Route path='/*' element={<Error404 />} />
            </Routes>
          </Router>
        </CupcakeDataContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;

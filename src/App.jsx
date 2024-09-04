import apiAxios from '../libs/axios.js';
import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.min.css';

import Login from './views/login/Login';
import ShopPage from './views/shopPage/ShopPage';
import Error404 from './views/error404/Error404';
import { CupcakeDataContext } from './context/CupcakeDataContext';
import { UserContext } from './context/UserContext';

// import { fakeMenu } from '../fakeData/fakeMenu';

  const data = async () => {
    const res = await apiAxios.get('/api/cupcake');
    const data = await res.data.data;
    return data;
  }

  const cupcakeStarterData = await data();

function App() {
  // Data
  const [username, setUsername] = useState('');
  const [cupcakeData, setCupcakeData] = useState(cupcakeStarterData);


  return (
    <>
      <UserContext.Provider value={{ username, setUsername }}>
        <CupcakeDataContext.Provider value={{ cupcakeData, setCupcakeData, cupcakeStarterData }}>
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

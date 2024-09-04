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

// Get cupcake data
let cupcakeStarterData = {};
await apiAxios.get('/api/cupcake')
  .then(res => cupcakeStarterData = res.data.data);

// Get user info
let baseUserData = {};
apiAxios.get('/api/user')
  .then(res => baseUserData = res.data)
  .catch(err => {});

function App() {
  // Data
  const [userData, setuserData] = useState(baseUserData);
  const [cupcakeData, setCupcakeData] = useState(cupcakeStarterData);


  return (
    <>
      <UserContext.Provider value={{ userData, setuserData }}>
        <CupcakeDataContext.Provider value={{ cupcakeData, setCupcakeData }}>
          <Router>
            <Routes>
              <Route path='/' element={<Login userData={userData} setuserData={setuserData} />} />
              <Route path='/commandes' element={<ShopPage userData={userData} setuserData={setuserData} />} />
              <Route path='/*' element={<Error404 />} />
            </Routes>
          </Router>
        </CupcakeDataContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;

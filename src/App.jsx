import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './views/login/Login';
import ShopPage from './views/shopPage/ShopPage';
import Error404 from './views/error404/Error404';

export const UserContext = createContext('');

function App() {
  // Data
  const [username, setUsername] = useState('');

  return (
    <>
      <UserContext.Provider value={{ username, setUsername }}>
        <Router>
          <Routes>
            <Route path='/' element={<Login username={username} setUsername={setUsername} />} />
            <Route path='/commandes' element={<ShopPage username={username} setUsername={setUsername} />} />
            <Route path='/*' element={<Error404 />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;

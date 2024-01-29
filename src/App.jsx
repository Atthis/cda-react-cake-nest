import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import OrderPage from './pages/OrderPage';

function App() {
  // Data
  const [username, setUsername] = useState('');

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login username={username} setUsername={setUsername} />} />
          <Route path='/commandes' element={<OrderPage username={username} setUsername={setUsername} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import OrderPage from './pages/OrderPage';
import Error404 from './pages/Error404';

function App() {
  // Data
  const [username, setUsername] = useState('');

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login username={username} setUsername={setUsername} />} />
          <Route path='/commandes' element={<OrderPage username={username} setUsername={setUsername} />} />
          <Route path='/*' element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

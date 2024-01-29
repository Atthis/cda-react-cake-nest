import { useState } from 'react';
import Login from './pages/Login';

function App() {
  const [username, setUsername] = useState('');

  return (
    <>
      <main>
        <Login username={username} setUsername={setUsername} />
      </main>
    </>
  );
}

export default App;

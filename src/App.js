import React from 'react';
import Navbar from './components/Navbar.jsx';
import PrimaryRoutes from './routes/PrimaryRoutes.jsx';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <PrimaryRoutes />
      </div>
    </>
  );
}

export default App;

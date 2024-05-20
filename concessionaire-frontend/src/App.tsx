import React from 'react';
import logo from './valley.jpg';

import { LoginPage } from './pages/loginPage';
import { ManagerPage } from './pages/managerPage';

function App() {
  return (
    <div className="App">
      <ManagerPage/>
      {/*<LoginPage/>*/}
    </div>
  );
}

export default App;

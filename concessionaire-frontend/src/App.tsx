import React from 'react';
import logo from './valley.jpg';

import { ManagerPage } from './pages/managerPage';
import { LoginPage } from './pages/loginPage';
import { ObrasPage } from './pages/obrasPage';


function App() {
  return (
    <div className="App">
      {/*<ManagerPage/>*/}
      <ObrasPage/>
      {/*<LoginPage/>*/}
    </div>
  );
}

export default App;

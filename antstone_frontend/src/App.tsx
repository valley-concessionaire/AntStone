import { AuthenticatedLayout } from './layouts/AuthenticatedLayout';
import IAuthManager from './shared/security/IAuthManager';
import IoCContainer from './shared/IoC/IoCContainer';
import { UnauthenticatedLayout } from './layouts/UnauthenticatedLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/homePage';
import { LoginPage } from './pages/loginPage';
import ObrasPage from './pages/obras/obrasPage';
import TrabajadoresPage from './pages/trabajadores/trabajadoresPage';
import { TablesPage } from './pages/tablesPage';


function App() {
  const authManager: IAuthManager = IoCContainer.getAuthManager();
  return (
    <>
      {authManager.isAuthenticated() ?    
        <AuthenticatedLayout/>
        :
        <UnauthenticatedLayout/>
      }
    </>
  );
}

export default App;

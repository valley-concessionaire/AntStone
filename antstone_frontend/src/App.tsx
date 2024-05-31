import { AuthenticatedLayout } from './layouts/AuthenticatedLayout';
import IAuthManager from './shared/security/IAuthManager';
import IoCContainer from './shared/IoC/IoCContainer';
import { UnauthenticatedLayout } from './layouts/UnauthenticatedLayout';

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

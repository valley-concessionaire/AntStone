import { AuthenticatedLayout } from './layouts/AuthenticatedLayout';
import IAuthManager from './shared/security/IAuthManager';
import IoCContainer from './shared/IoC/IoCContainer';
import { UnauthenticatedLayout } from './layouts/UnauthenticatedLayout';
import { ThemeProvider } from "./components/theme-provider";

function App() {
  const authManager: IAuthManager = IoCContainer.getAuthManager();
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <>
      {authManager.isAuthenticated() ?    
        <AuthenticatedLayout/>
        :
        <UnauthenticatedLayout/>
      }
    </>
    </ThemeProvider>
  );
}

export default App;

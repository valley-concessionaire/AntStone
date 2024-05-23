import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ManagerPage } from './pages/managerPage';
import { LoginPage } from './pages/loginPage';
import { ObrasPage } from './pages/obrasPage';
import { Layout } from './layouts/layout';


function App() {
  return (
  <Router>
    <Routes>

      <Route path="/" element={<LoginPage />} />
      <Route path="/manager" element={<Layout><ManagerPage /></Layout>} />
      <Route path="/obras" element={<Layout><ObrasPage /></Layout>} />

    </Routes>
  </Router>
  );
}

export default App;

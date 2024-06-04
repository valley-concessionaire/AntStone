import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/homePage';
import { LoginPage } from './pages/loginPage';
import ObrasPage from './pages/obras/obrasPage';
import TrabajadoresPage from './pages/trabajadores/trabajadoresPage';
import { TablesPage } from './pages/tablesPage';
import { Layout } from './layouts/layout';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/inicio" element={<Layout><HomePage/></Layout>} />
      <Route path="/tablas" element={<Layout><TablesPage/></Layout>} />
      <Route path="/obras" element={<Layout><ObrasPage search={""}/></Layout>} />
      <Route path="/trabajadores" element={<Layout><TrabajadoresPage search={""}/></Layout>} />
    </Routes>
  </Router>
  );
}

export default App;

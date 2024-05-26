import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from "../pages/loginPage";


export function UnauthenticatedLayout() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}


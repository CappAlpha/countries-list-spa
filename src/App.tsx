import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainLayout } from './components/MainLayout';
import { CountryPage } from './pages/CountryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/country/:name" element={<CountryPage />} />
        <Route path="*" element={<p>404</p>} />
      </Route>
    </Routes>
  );
}

export default App;

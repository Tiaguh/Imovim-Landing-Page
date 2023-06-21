import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import TelaDownload from './Pages/Tela-Download/Tela-Download';
import TelaTermos from './Pages/Tela-Termos/Tela-Termos'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<TelaDownload />} />
          <Route path="/termos-de-uso" element={<TelaTermos />} />
        </Routes>
      </Router>
    </div>
  );
}
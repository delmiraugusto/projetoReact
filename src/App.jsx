import { Historico } from "./pages/historicoCompras"
import { Sobre } from "./pages/Sobre"
import React from 'react';
import { Cadastro } from './pages/cadastro';
import { Login } from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from './pages/home';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/sobre" element={<Sobre />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
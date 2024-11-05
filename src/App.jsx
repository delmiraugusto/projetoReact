
import { Sobre } from "./pages/Sobre"
import React from 'react';
import { Cadastro } from './pages/cadastro';
import { Login } from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import {Home} from './pages/home';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}
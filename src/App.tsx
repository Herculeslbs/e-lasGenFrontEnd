import React from 'react';
import './App.css';

import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import Navbar from "./components/estaticos/navbar/NavbarUsuario";
import Footer from "./components/estaticos/footer/Footer";
import Sobre from "./paginas/sobre/Sobre";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import { Provider } from 'react-redux';
import store from './store/store';
import ListaProduto from './components/produtos/listaProduto/ListaProduto';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import DeletarCategorias from './components/categorias/deletarCategorias/DeletarCategorias';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProtudo';
import CadastroProduto from './components/produtos/cadastroProduto/CadastroProduto';
import CadastroCategorias from './components/categorias/cadastroCategorias/CadastroCategorias';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashbord from './paginas/dashbord/Dashbord';


function App() {
  return (
    <Provider store = {store}>
        <ToastContainer />
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/produtos" element={<ListaProduto/>} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/listacategorias" element={<ListaCategorias />} />

          <Route path="/deletarcategorias/:id" element={<DeletarCategorias />} />
          <Route path="/deletarprodutos/:id" element={<DeletarProduto />} />
          
          <Route path="/formularioprodutos" element={<CadastroProduto />} />
          <Route path="/formularioProduto/:id" element={<CadastroProduto />} />
          <Route path="/formulariocategorias" element={<CadastroCategorias />} />
          <Route path="/formulariocategorias/:id" element={<CadastroCategorias />} />

          <Route path="/dashbord" element={<Dashbord />} />

        </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;

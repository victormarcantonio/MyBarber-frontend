import React, {useEffect} from 'react';
import $ from 'jquery';
import{Route, Switch} from 'react-router-dom';
import '../src/styles/scss/app.scss';
import Header from './components/UI/Header/Header';
import Sidebar from './components/UI/Sidebar/Sidebar';
import DashBoard from './containers/DashBoard/DashBoard';
import ListarServico from './containers/Servico/ListarServico';
import CadastrarServico from './containers/Servico/CadastrarServico';
import ListarFuncionarios from './containers/Funcionarios/ListarFuncionarios';
import CadastrarFuncionario from './containers/Funcionarios/CadastrarFuncionario';
import ListarClientes from './containers/Clientes/ListarClientes';
import CadastrarCliente from './containers/Clientes/CadastrarCliente';


function App() {


  return (
    <body className="app sidebar-mini ">
       <Header/>
       <Sidebar/>
       <Route path="/" exact component={DashBoard}/>
       <Route path="/listarServico" component={ListarServico}/>
       <Route path="/cadastrarServico" component={CadastrarServico}/>
       <Route path="/listarFuncionario" component={ListarFuncionarios}/>
       <Route path="/cadastrarFuncionario" component={CadastrarFuncionario}/>
       <Route path="/listarCliente" component={ListarClientes}/>
       <Route path="/cadastrarCliente" component={CadastrarCliente}/>
       </body>  
  );
}

export default App;

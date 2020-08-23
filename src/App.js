import React from 'react';
import{Route, Switch} from 'react-router-dom';
import '../src/styles/scss/app.scss';
import Header from './components/UI/Header/Header';
import Sidebar from './components/UI/Sidebar/Sidebar';
import DashBoard from './containers/DashBoard/DashBoard';
import ListarServico from './containers/Servico/ListarServico';
import CadastrarServico from './containers/Servico/CadastrarServico';
import ListarFuncionarios from './containers/Funcionarios/ListarFuncionarios';
import CadastrarFuncionario from './containers/Funcionarios/CadastrarFuncionario';


function App() {
  return (
    <div className="App">
       <Header/>
       <Sidebar/>
       <Route path="/" exact component={DashBoard}/>
       <Route path="/listarServico" component={ListarServico}/>
       <Route path="/cadastrarServico" component={CadastrarServico}/>
       <Route path="/listarFuncionario" component={ListarFuncionarios}/>
       <Route path="/cadastrarFuncionario" component={CadastrarFuncionario}/>
    </div>
  );
}

export default App;

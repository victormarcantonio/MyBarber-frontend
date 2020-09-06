import React, { Component } from 'react';

import { faThList, faList } from '@fortawesome/free-solid-svg-icons';

import BreadCumb from '../../components/UI/BreadCumb/BreadCumb';
import Table from '../../components/UI/Table/Table';

import Icons from '../../components/UI/Icons/Icons';


class ListarClientes extends Component {
    render() {
        return (
            <main class="app-content">
                <div className="app-title">
                    <div>

                        <h1><i class="fa fa-th-list">
                            </i> Clientes</h1>
                        <p>Todas os clientes cadastrados na barbearia</p>
                    </div>
                    <BreadCumb icon={faThList} name="Clientes" />
                </div>
                <Table path="cadastrarCliente">
                <thead>
                    <tr>
                    <th class="sorting_asc" tabindex="0" aria-controls="table-servicos" rowspan="1" colspan="1" style={{width:'309.2px'}}aria-label="Descrição: Ordenar colunas de forma descendente" aria-sort="ascending">Descrição</th>
                      <th>Nome</th>
                      <th>E-mail</th>
                      <th>Telefone</th>
                      <th>Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </Table>
            </main>
        )
    }
}

export default ListarClientes;



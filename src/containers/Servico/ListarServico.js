import React, { Component } from 'react';

import { faThList, faList } from '@fortawesome/free-solid-svg-icons';

import BreadCumb from '../../components/UI/BreadCumb/BreadCumb';
import Table from '../../components/UI/Table/Table';

import Icons from '../../components/UI/Icons/Icons';


class ListarServico extends Component {
    render() {
        return (
            <main class="app-content">
                <div className="app-title">
                    <div>

                        <h1><i class="fa fa-th-list">
                            <Icons icon={faList}/>
                            </i> Serviços</h1>
                        <p>Todas os serviços cadastrados na barbearia</p>
                    </div>
                    <BreadCumb icon={faThList} name="Serviços" />
                </div>
                <Table path="cadastrarServico">
                <thead>
                    <tr>
                    <th class="sorting_asc" tabindex="0" aria-controls="table-servicos" rowspan="1" colspan="1" style={{width:'309.2px'}}aria-label="Descrição: Ordenar colunas de forma descendente" aria-sort="ascending">Descrição</th>
                      <th>Valor</th>
                      <th>Tempo</th>
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

export default ListarServico;



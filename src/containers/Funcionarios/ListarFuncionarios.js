import React from 'react';

import Table from '../../components/UI/Table/Table';

import BreadCumb from '../../components/UI/BreadCumb/BreadCumb';

import Icons from '../../components/UI/Icons/Icons';
import { faThList, faList } from '@fortawesome/free-solid-svg-icons';

function ListarFuncionarios() {
    return(
        <main class="app-content">
        <div className="app-title">
            <div>

                <h1><i class="fa fa-th-list">
                    <Icons icon={faList}/>
                    </i> Funcionarios</h1>
                <p>Todas os funcionários cadastrados na barbearia</p>
            </div>
            <BreadCumb icon={faThList} name="Funcionários" />
        </div>
        <Table path="cadastrarFuncionario">
        <thead>
            <tr>
            <th class="sorting_asc" tabindex="0" aria-controls="table-funcionarios" rowspan="1" colspan="1" style={{width:'309.2px'}}aria-label="Descrição: Ordenar colunas de forma descendente" aria-sort="ascending">
                Nome</th>
              <th>Telefone</th>
              <th>E-mail</th>
              <th>Endereço</th>
              <th>Status</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </Table>
    </main>
    )
}

export default ListarFuncionarios;
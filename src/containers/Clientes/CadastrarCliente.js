import React from 'react';
import {Link} from 'react-router-dom';

import Form from '../../components/UI/Form/Form';
import FormGroup from '../../components/UI/Form/FormGroup/FormGroup';
import Label from '../../components/UI/Label/Label';
import Input from '../../components/UI/Input/Input';
import { faThList, faList, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Icons from '../../components/UI/Icons/Icons';
import BreadCumb from '../../components/UI/BreadCumb/BreadCumb';
import Button from '../../components/UI/Button/Button';
import Footer from '../../components/UI/Footer/Footer';

function CadastrarCliente() {

    return (
        <main className="app-content">
            <div className="app-title">
                <div>
                    <h1><i className="fa fa-th-list">
                    </i> Clientes</h1>
                    <p>Cadastrar cliente</p>
                </div>
                <BreadCumb icon={faThList} name="Clientes" />
            </div>
            <div className="row cliente-form">
                <div className="col-md-6">
                    <div className="tile">
                        <h3 classname="tile-title">Novo cliente</h3>
                        <div className="tile-body">
                            <Form id="form-cliente">
                                <FormGroup className="form-group">
                                    <Label for="nome" className="control-label">Nome</Label>
                                    <Input className="form-control" type="text" id="nome" placeholder="Nome" />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <Label for="telefone" className="control-label">Telefone</Label>
                                    <Input className="form-control" type="text" id="telefone" placeholder="Telefone" data-mask="(00) 0000-0000" />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <Label for="email" className="control-label">E-mail</Label>
                                    <Input className="form-control" type="email" id="email" placeholder="E-mail" />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <Label for="data" className="control-label">Data Nascimento</Label>
                                    <Input className="form-control" type="date" id="dataNascimento" autofocus="autofocus" />
                                </FormGroup>
                            </Form>
                        </div>
                        <Footer className="tile-footer d-flex justify-content-end">
                                <Link to="/listarCliente" style={{ textDecoration: "none" }}>
                                    <Button type="reset" className="btn btn-secondary btn-cancelar" title="Click para cancelar" form="form-cliente"><i className="fa fa-fw fa-lg fa-times-circle"></i>Cancelar</Button>&nbsp;&nbsp;&nbsp;
                                </Link>
                                <Button type="submit" className="btn btn-primary btn-salvar" title="Clique para salvar um serviço" form="form-servico"><i className="fa fa-fw fa-lg fa-check-circle"></i>Salvar</Button>
                            </Footer>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default CadastrarCliente;
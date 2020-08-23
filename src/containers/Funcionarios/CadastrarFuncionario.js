import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../../components/UI/Form/Form';
import FormGroup from '../../components/UI/Form/FormGroup/FormGroup';
import Label from '../../components/UI/Label/Label';
import Input from '../../components/UI/Input/Input';
import { faThList, faList, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Icons from '../../components/UI/Icons/Icons';
import BreadCumb from '../../components/UI/BreadCumb/BreadCumb';
import Button from '../../components/UI/Button/Button';
import Footer from '../../components/UI/Footer/Footer';


function CadastrarFuncionario() {
    return (
        <>
            <main className="app-content">
                <div className="app-title">
                    <div>
                        <h1><i className="fa fa-th-list">
                            <Icons icon={faList} />
                        </i> Funcionários</h1>
                        <p>Cadastrar funcionário</p>
                    </div>
                    <BreadCumb icon={faThList} name="Funcionários" />
                </div>
                <div className="row funcionario-form">
                    <div className="col-md-6">
                        <div className="tile">
                            <h3 classname="tile-title">Novo funcionário</h3>
                            <div className="tile-body">
                                <Form id="form-funcionario">
                                    <h4 className="line-head">Dados pessoais</h4>
                                    <div className="form-row">
                                        <FormGroup className="form-group required col-md-6">
                                            <Label for="nome" className="control-label">Nome</Label>
                                            <Input className="form-control" type="text" id="nome" placeholder="Nome" />
                                        </FormGroup>
                                        <FormGroup className="form-group col-md-6">
                                            <Label for="sobrenome" className="control-label">Sobrenome</Label>
                                            <Input className="form-control" type="text" id="sobrenome" placeholder="Sobrenome" />
                                        </FormGroup>
                                    </div>
                                    <div className="form-row">
                                        <FormGroup className="form-group col-md-6">
                                            <Label for="telefone" className="control-label">Telefone</Label>
                                            <Input className="form-control" type="text" id="telefone" placeholder="Telefone" data-mask="(00) 0000-0000" />
                                        </FormGroup>
                                        <FormGroup className="form-group col-md-6">
                                            <Label for="data" className="control-label">Data Nascimento</Label>
                                            <Input className="form-control" type="date" id="dataNascimento" autofocus="autofocus" />
                                        </FormGroup>
                                    </div>
                                    <div className="form-row">
                                        <FormGroup className="form-group required col">
                                            <Label for="email" className="control-label">E-mail</Label>
                                            <Input className="form-control" type="email" id="email" placeholder="E-mail" />
                                        </FormGroup>
                                    </div>
                                    <h4 className="line-head">Dados profissionais</h4>
                                    <div className="form-row">
                                        <FormGroup className="form-group required col">
                                            <Label for="cargo" className="control-label">Cargo</Label>
                                            <select class="form-control" id="cargo" name="cargo" required>
                                                <option value="" selected>Selecione um cargo</option>
                                                <option value="BARBEIRO">BARBEIRO</option>
                                                <option value="RECEPCIONISTA">RECEPCIONISTA</option>
                                            </select>
                                        </FormGroup>
                                    </div>
                                    <div className="form-row">
                                    <FormGroup className="form-group required col-md-6">
                                            <Label for="login" className="control-label">Login</Label>
                                            <Input className="form-control" type="text" id="login" placeholder="Login" />
                                        </FormGroup>
                                        <FormGroup className="form-group required col-md-6">
                                            <Label for="perfil" className="control-label">Perfil</Label>
                                            <select class="form-control" id="perfil" name="perfil" required>
                                                <option value="" selected>Selecione um perfil</option>
                                                <option value="BARBEIRO">ADM</option>
                                                <option value="RECEPCIONISTA">Operador</option>
                                            </select>
                                        </FormGroup>
                                    </div>
                                </Form>
                            </div>
                            <Footer className="tile-footer d-flex justify-content-end">
                                <Link to="/listarFuncionario" style={{ textDecoration: "none" }}>
                                    <Button type="reset" className="btn btn-secondary btn-cancelar" title="Click para cancelar" form="form-servico"><i className="fa fa-fw fa-lg fa-times-circle"><Icons icon={faTimesCircle} /></i>Cancelar</Button>&nbsp;&nbsp;&nbsp;
                                </Link>
                                <Button type="submit" className="btn btn-primary btn-salvar" title="Clique para salvar um serviço" form="form-servico"><i className="fa fa-fw fa-lg fa-check-circle"><Icons icon={faCheckCircle} /></i>Salvar</Button>
                            </Footer>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default CadastrarFuncionario;
import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import { faThList, faList, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import BreadCumb from '../../components/UI/BreadCumb/BreadCumb';
import Icons from '../../components/UI/Icons/Icons';

import Form from '../../components/UI/Form/Form';
import FormGroup from '../../components/UI/Form/FormGroup/FormGroup';
import Label from '../../components/UI/Label/Label';
import Input from '../../components/UI/Input/Input';
import Footer from '../../components/UI/Footer/Footer';
import Button from '../../components/UI/Button/Button';
import CurrencyInput from 'react-currency-masked-input';
import IntlCurrencyInput from "react-intl-currency-input"



function CadastrarServico() {


    const currencyConfig = {
        locale: "pt-BR",
        formats: {
          number: {
            BRL: {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            },
          },
        },
      };

    return (
        <>
            <main className="app-content">
                <div className="app-title">
                    <div>

                        <h1><i className="fa fa-th-list">
                        </i> Serviços</h1>
                        <p>Todas os serviços cadastrados na barbearia</p>
                    </div>
                    <BreadCumb icon={faThList} name="Serviços" />
                </div>
                <div className="row servico-form">
                    <div className="col-md-6">
                        <div className="tile">
                            <h3 className="tile-title">Novo Serviço</h3>
                            <div className="tile-body">
                                <Form id="form-servico">
                                    <FormGroup className="form-group">
                                        <Label className="control-label" for="descricao">Descrição</Label>
                                        <Input className="form-control" type="text" id="descricao" placeholder="Descrição" />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label className="control-label" for="valor" >Valor R$</Label>
                                        <IntlCurrencyInput currency="BRL" config={currencyConfig} className="form-control" type="text" id="valor" placeholder="00,00" max={999}/>
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label className="control-label" for="tempo" >Tempo</Label>
                                        <Input className="form-control" type="text" id="tempo" placeholder="--:--" mask="99:99" autofocus="autofocus" />
                                    </FormGroup>
                                </Form>
                            </div>
                            <Footer className="tile-footer d-flex justify-content-end">
                                <Link to="/listarServico" style={{ textDecoration: "none" }}>
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


export default CadastrarServico;
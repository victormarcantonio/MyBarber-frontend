import React, { Component } from 'react';

import BreadCumb from '../../components/UI/BreadCumb/BreadCumb';
import Icons from '../../components/UI/Icons/Icons';
import CardDash from '../../components/UI/CardDash/CardDash'

import { faTachometerAlt, faUsers, faThumbsUp, faFile, faStar, faUser } from '@fortawesome/free-solid-svg-icons';


class DashBoard extends Component {
    render() {
        return (
            <main className="app-content">  
            <div class="app-title">
		<div>
			<h1>
				<i class="fa fa-dashboard">
                    </i> Dashboard
			</h1>
		</div>
        <BreadCumb name="Dashboard"/> 
	</div>   
              
                <div className="row">
                <CardDash color="primary" icon ={faUsers} name="Usuários" value="5" />
                <CardDash color="info" icon ={faThumbsUp} name="Likes" value="25" />
                <CardDash color="warning" icon ={faFile} name="Uploads" value="10" />
                <CardDash color="danger" icon ={faStar} name="Stars" value="500" />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="tile">
                            <h3 className="tile-title">Monthly Sales</h3>
                            <div className="embed-responsive embed-responsive-16by9">
                                <canvas className="embed-responsive-item" id="lineChartDemo"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="tile">
                            <h3 className="tile-title">Support Requests</h3>
                            <div className="embed-responsive embed-responsive-16by9">
                                <canvas className="embed-responsive-item" id="pieChartDemo"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            
        )
    }
}

export default DashBoard;


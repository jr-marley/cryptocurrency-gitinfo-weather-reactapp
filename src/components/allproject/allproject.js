import React, { Component } from 'react'
import './allproject.css'
import wp from '../../images/weatherlogo.jpg'
import gp from '../../images/gitprofile.jpeg'
import cp from '../../images/bitcoinlogo.jpeg'
import weather1 from '../weather/weather'
import github from '../github/github'
import Crypto from '../../components/crypto'
import { Link } from 'react-router-dom'
export default class componentName extends Component {
    render() {
        return (
        
            <>
                <div className="back">
                <div className="container-fluid imgs">
                 <div className="dir">  <marquee direction="left"><h1 className="heading_class">Welcome To Our Project</h1></marquee></div>
                    <div className="row">
                        <div className="col-sm-4 col-xs-12">
                            <div class="card">
                                <img src={wp} class="card-img-top layer" alt="..." />
                                <div class="card-body">
                                
                                <Link to="weather1" class="btn btn-primary">Weather App</Link>
                                </div>
                            </div>
                        </div>
                    
                    <div className="col-sm-4 col-xs-12">
                        <div class="card">
                            <img src={gp} class="card-img-top" alt="..." />
                            <div class="card-body">

                                <Link to="github" class="btn btn-primary">github App</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <div class="card">
                            <img src={cp} class="card-img-top" alt="..." />
                            <div class="card-body">


                                <Link to="Crypto" class="btn btn-primary">crypto App</Link>
                            </div>
                        </div>
                    </div>
                </div>
               <div className="margin">

               </div>
                </div>
                </div>
             </>   
                 
        )
    }
}

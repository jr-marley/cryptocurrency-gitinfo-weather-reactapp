import React, { Component } from 'react'
import './info.css'
import bg from '../../images/logo.png';
import axios from 'axios'
//import * as serviceWorker from './serviceWorker';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import Plot from 'react-plotly.js';
import { Bar } from 'react-chartjs-2';

export default class Info extends React.Component {
  /*  state={
        circulating_supply:"",
        price:"",
        price_change_pct:"",
        currency:"",
        volume:"",
        max_supply:"",
        name:"",
    };*/
  state = {
    datas: [],
    image: "",
    graphData: [],
    x: [],
    y: [],
    stocks: [],
    six: [],




  }

  componentDidMount() {
    var prices;
    const $button = document.querySelector('#sidebar-toggle');
    const $wrapper = document.querySelector('#wrapper');

    $button.addEventListener('click', (e) => {
      e.preventDefault();
      $wrapper.classList.toggle('toggled');
    });





    this.priceData();
    this.graphData();
  }













  graphData() {
    var i = 0;
    var graphData = []
    var xvalue = []
    var yvalue = []
    var x
    var y

    axios.get(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${localStorage.getItem("coin")}&tsym=INR&limit=30&aggregate=3&e=CCCAGG`)
      .then(response => {
        console.log(response)
        graphData = response.data.Data
        console.log(graphData)
        console.log(Object.keys(graphData.Data).length);
        for (i = 0; i < (Object.keys(graphData.Data).length); i++) {

          var date = new Date(graphData.Data[i].time * 1000).toDateString()
          xvalue[i] = date;
          yvalue[i] = graphData.Data[i].close;
        }
        this.setState({
          x: xvalue,
          y: yvalue,
          labels: xvalue,
          datasets: [
            {
              label: (this.state.symbol),
              backgroundColor: 'rgba(68, 108, 179, 1)',
              borderColor: 'rgba(1,0,1,1)',
              borderWidth: 2,
              data: yvalue
            }
          ]

        })




        //console.log(yvalue)
        // console.log(six)


      })
      .catch(error => {
        console.log(error)
      })



  }


  priceData() {
    var result = []
    var r = []
    var stocks;
    var name;
    var symbol
    var currency
    var price
    var price_change_pct
    var volume
    var max_supply
    var logo_url
    var market_cap
    var circulating_supply
    console.log(localStorage.getItem("coin"));
    axios.get(`https://api.nomics.com/v1/currencies/ticker?key=2018-09-demo-dont-deploy-b69315e440beb145&ids=${localStorage.getItem("coin")}&interval=1d,30d&convert=INR`).then(res => {
      result = res.data;
      stocks = result.slice(0, 5)
      console.log(res)
      var d = 1 + "d";


      stocks.map((item) => {

        name = item.name
        symbol = item.symbol
        price = item.price
        currency = item.currency
        max_supply = item.max_supply
        price_change_pct = item[d].price_change_pct
        volume = item[d].volume
        logo_url = item.logo_url
        market_cap = item.market_cap
        circulating_supply = item.circulating_supply


        console.log(volume)

        this.setState({
          name: name,
          symbol: symbol,
          currency: currency,
          price: price,
          max_supply: max_supply,
          price_change_pct: price_change_pct,
          volume: volume,
          market_cap: market_cap,
          circulating_supply: circulating_supply,
          logo_url: logo_url
        })
      });



    })
  }


  redirect() {
    window.location.assign("/")
  }


  render() {
    return (

      <div id="wrapper">
        <div className="back-img">
          <div className="content">
            <aside id="sidebar-wrapper">
              <div className="navbar_clr">
                <img className="img_class" src={bg} onClick={this.redirect} />
                
              </div>
              <ul class="sidebar-nav">
                <li>
                  <a href="dashboard"><i class="fas fa-chart-bar"></i>&nbsp;DASHBOARD</a>
                </li>


              </ul>
            </aside>
          </div>
        </div>
        <div id="navbar-wrapper">

          <nav class="navbar navbar-inverse">

            <div class="container-fluid">
              <div class="navbar-header">
                <a href="#" class="navbar-brand" id="sidebar-toggle"><i class="fa fa-bars"></i></a>
              </div><br></br>
              <h3 class="h3_class">DashBoard</h3>
              <form class="form-inline ml-auto">
                <div class="md-form my-0">
                  <input class="none" type=""/>
                </div>
                <button href="#!" class="btn btn-md my-0 ml-sm-2" type="submit"></button>
              </form>
            </div>

          </nav>

        </div>



        <div className="container-fluid ">

          <div className="row">
          <div className="col-sm-1 col-xs-12 "></div>
            <div className="col-sm-5 col-xs-12 logo_cont">
              <p className="logo_class"><img className="logosix" src={this.state.logo_url} /></p>
              <h1 className="head_style">{this.state.name}&nbsp;<sub>{this.state.currency}</sub></h1>
            </div>
           
            

            <div className="col-sm-5 col-xs-12 logo_con">

              <center><b>  <p class="card-title">₹{Math.round((this.state.price),2)} &nbsp;<sub>INR</sub>&nbsp;({(this.state.price_change_pct)}&#37;)</p></b></center>
              <center> <p>1.00000000&nbsp;{this.state.currency}&nbsp;(0.00%)</p></center>


            </div>
            <div className="col-sm-1 col-xs-12 "></div>
          </div>
         

          <div className="row">
            <div class="col-sm-12 col-xs-12">
              <Table striped bordered hover variant="dark" className="table_style">
                <thead className="table_head">
                  <tr>
                    <th>Market cap</th>
                    <th>volume(24h)</th>
                    <th>Circulating supply</th>
                    <th>max Supply</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.market_cap}&nbsp;INR</td>
                    <td>{this.state.volume}&nbsp;INR</td>
                    <td>{this.state.circulating_supply}&nbsp;{this.state.currency}</td>
                    <td>{this.state.max_supply}&nbsp;{this.state.currency}</td>
                  </tr>

                </tbody>
              </Table>
            </div>
          </div>

        </div>
        <div className="top_cl"></div>
        <div className="graphcont">
          <Bar
            data={this.state}
            options={{
              title: {
                display: true,
                text: 'Price Chart',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              }
            }}
          />
        </div>

      </div>
    )
  }

}









import React, { Component } from 'react'

import './dashboard.css'
import Plot from 'react-plotly.js';
import axios from 'axios';
import Chart from 'chart.js';
import bg from '../../images/logo.png';

import { MDBDataTable } from 'mdbreact';
import infopage from '../../pages/infopage'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Link } from 'react-router-dom'

export default class dashboard extends Component {

    state = {
        stocks: [],
        isLoaded: false,
        stockgrap: [],
        stockgrap1: [],
        stockgrap2: [],
        stockgrap3: [],
        stockChartXvalues: [],
        stockChartYvalues: [],
        market_cap: "",
        x: [],
        y: [],
        x1: [],
        y1: [],
        x2: [],
        y2: [],
        x3: [],
        y3: [],
        access: "",
        sample: "",

    }

    async componentDidMount() {
        var prices;
        const button  = document.querySelector('#sidebar-toggle');
        const wrapper = document.querySelector('#wrapper');
        
        // button.addEventListener('click', (e) => {
        //   e.preventDefault();
        //   wrapper.classList.toggle('toggled');
        // });

        await this.fetchcurrencydata();

        await this.fetchStock();

        await this.fetchETHstock();

        await this.fetchRIPstock();

        await this.fetchLITstock();
    }

  redirect() {
    window.location.assign("/")
  }

    DatatablePage = () => {
        const data = {
            columns: [
                {
                    label: '#',
                    field: 'rank',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'LOGO',
                    field: 'logo',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'NAME',
                    field: 'name',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'SYMBOL',
                    field: 'symbol',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'MARKET CAP',
                    field: 'market_cap',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'PRICE',
                    field: 'price',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'CIRCULATING SUPPLY',
                    field: 'circulating_supply',
                    sort: 'asc',
                    width: 100
                }
            ],
            rows: this.state.access
        };

        const thanku = <MDBDataTable
            striped
            bordered
            small
            data={data}
        />
        this.setState({
            sample: thanku
        })

    }







    fetchcurrencydata() {
        fetch('https://api.nomics.com/v1/currencies/ticker?key=2018-09-demo-dont-deploy-b69315e440beb145&interval=1d,30d&convert=INR')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    isLoaded: true,
                    stocks: res.slice(0, 400),


                })
                const st = this.state.stocks;
                const tab = st.map(zx => {
                    const asd = {
                        "rank": zx.rank,
                        "name": <Link to="info" onClick={() => { localStorage.setItem("coin", zx.symbol); }}>{zx.name}</Link>,
                        "logo": <img src={zx.logo_url} className="logourl" />,
                        "symbol": zx.symbol,
                        "market_cap": zx.market_cap,
                        "price": zx.price,
                        "circulating_supply": zx.circulating_supply,

                    }
                    return asd;

                })
                this.setState({
                    access: tab
                })
                console.log("hello", this.state.access)
                this.DatatablePage();
            })

    }

  

    async fetchStock() {
        var i = 0;
        var timee = [];
        var high = [];
        await axios.get(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=INR&limit=30&aggregate=3&e=CCCAGG`)

            .then(response => {
                var stockgrap = response.data;
                console.log();
                stockgrap = stockgrap.Data.Data;
                console.log(stockgrap);
                console.log(Object.keys(stockgrap).length);
                for (i = 0; i < Object.keys(stockgrap).length; i++) {
                    timee[i] = stockgrap[i].time;
                    high[i] = stockgrap[i].close;
                }

                //console.log(timee)
                // console.log(high)
                this.setState({
                    x: timee,
                    y: high,
                })
                console.log(this.state.x)
                console.log(this.state.y)





            })

    }         
    async fetchETHstock() {
        var i = 0;
        var timee1 = [];
        var high1 = [];
        await axios.get(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=INR&limit=30&aggregate=3&e=CCCAGG`)

            .then(response => {
                var stockgrap1 = response.data;
                console.log();
                stockgrap1 = stockgrap1.Data.Data;
                console.log(stockgrap1);
                console.log(Object.keys(stockgrap1).length);
                for (i = 0; i < Object.keys(stockgrap1).length; i++) {
                    timee1[i] = stockgrap1[i].time;
                    high1[i] = stockgrap1[i].close;
                }

              
                this.setState({
                    x1: timee1,
                    y1: high1,
                })
                console.log(this.state.x1)

            })

    }

    async fetchRIPstock() {
        var i = 0;
        var timee2 = [];
        var high2 = [];
        await axios.get(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=XRP&tsym=INR&limit=30&aggregate=3&e=CCCAGG`)

            .then(response => {
                var stockgrap2 = response.data;
                console.log();
                stockgrap2 = stockgrap2.Data.Data;
                console.log(stockgrap2);
                console.log(Object.keys(stockgrap2).length);
                for (i = 0; i < Object.keys(stockgrap2).length; i++) {
                    timee2[i] = stockgrap2[i].time;
                    high2[i] = stockgrap2[i].close;
                }

                //console.log(timee)
                // console.log(high)
                this.setState({
                    x2: timee2,
                    y2: high2,
                })
                //console.log(this.state.x2)
                //console.log(this.state.y2)





            })

    }



    async fetchLITstock() {
        var i = 0;
        var timee3 = [];
        var high3 = [];
        await axios.get(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=LIT&tsym=INR&limit=30&aggregate=3&e=CCCAGG`)

            .then(response => {
                var stockgrap3 = response.data;
                console.log();
                stockgrap3 = stockgrap3.Data.Data;
                console.log(stockgrap3);
                console.log(Object.keys(stockgrap3).length);
                for (i = 0; i < Object.keys(stockgrap3).length; i++) {
                    timee3[i] = stockgrap3[i].time;
                    high3[i] = stockgrap3[i].close;
                }

                //console.log(timee)
                // console.log(high)
                this.setState({
                    x3: timee3,
                    y3: high3,
                })
                console.log(this.state.x3)
                console.log(this.state.y3)





            })

    }



    render() {
        var { isLoaded, stocks } = this.state;
        if (!isLoaded) {
            return <div className="loda">
                <div class="spinner-grow text-danger" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-warning" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-info" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>

        }

        else {

            return (
                <>

                    <div id="wrapper">
                        <div className="back-img">
                            <div className="content">
                                <aside id="sidebar-wrapper">
                                    <div className="navbar_clr">
                                        <img className="img_class" src={bg}  onClick={this.redirect}/>
                                        <br></br><br></br><b><hr className="hyper_line"></hr></b>
                                    </div>
                                    <ul class="sidebar-nav">
                                        <li>
                                            <Link to="/crypto"><i class="fab fa-houzz"></i>&nbsp;HOME</Link>
                                            
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
                                    <form class="form-inline ml-auto ">
                                        <div class="md-form my-0">
                                            <input class="none" type=""  />
                                        </div>
                                        <button href="#!" class="btn btn-underline-white btn-md my-0 ml-sm-2" type="submit"></button>
                                    </form>
                                </div>

                            </nav>

                        </div>

                        <div className="container">
                        
                        <div className="moving-text">
                            <marquee behavior="scroll" direction="left">
                                CryptoCurrencies: 5,078 &nbsp; Market cap: ₹12162112738359 &nbsp; Supply:18197062
                               
                        </marquee> 
                        </div>
                        <div className="backgroundcolorfull">
                        <div className="marginbottom"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="card">
                                        <Plot
                                            data={[
                                                {
                                                    x: (this.state.x),
                                                    y: (this.state.y),
                                                    type: 'scatter',
                                                    mode: 'lines',
                                                    lines: { color: 'red' },
                                                },
                                                { type: 'bar', x: this.state.x, y: this.state.y },
                                            ]}
                                            layout={{ width: 270, height: 240 }}
                                        />

                                        <div className="card-body bodycard">
                                        <center>  <i className="fab fa-bitcoin bitcoin">Bitcoin</i></center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div class="card">
                                        <Plot
                                            data={[
                                                {
                                                    x: (this.state.x1),
                                                    y: (this.state.y1),
                                                    type: 'scatter',

                                                },
                                                { type: 'bar', x: this.state.x1, y: this.state.y1 },
                                            ]}
                                            layout={{ width: 270, height: 240 }}
                                        />
                                        <div class="card-body">
                                            <i class="fab fa-ethereum ethereum">Ethereum</i>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-sm-4">
                                    <div class="card">
                                        <Plot
                                            data={[
                                                {
                                                    x: (this.state.x3),
                                                    y: (this.state.y3),
                                                    type: 'scatter',

                                                },
                                                { type: 'bar', x: this.state.x3, y: this.state.y3 },
                                            ]}
                                            layout={{ width: 270, height: 240 }}
                                        />
                                        <div class="card-body">
                                            <i class="fas fa-lira-sign litcoin">Litcoin</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="marginbotto"></div><br /><br />

                        <div className="marginbottom"></div>
                        <br /><br /><br /></div>
                    <div className="container tablesize">
                        {this.state.sample}
                    </div>

                        </div>




                    </div>



                </>
            )
        }
    }

}


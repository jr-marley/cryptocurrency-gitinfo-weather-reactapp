import React, { Component } from 'react'
import './crypto.css'
import bg from '../images/logo.png'
import laptop from '../images/laptop.png'
import about from '../images/about-img.png'
import phone from '../images/phone.svg'
import firewall from '../images/firewall.svg'
import ex from '../images/ex.svg'
import stat from '../images/stat.svg'
import support from '../images/support.svg'
import wallet from '../images/wallet.svg'
import wallet1 from '../images/1.png'
import wallet2 from '../images/2.png'
import wallet3 from '../images/3.png'
import person from '../images/2.jpg'
import person1 from '../images/1.jpg'
import person2 from '../images/5.jpg'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Email from 'emailjs'
import dashboard from '../pages/dashboardpage'
import feature from '../components/feature'
import crypto from '../components/crypto'
import { Link } from 'react-router-dom'

// var nodemailer = require('nodemailer');
//var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
export default class news extends Component {

    state = {
        newsItems: []
        
    }
    componentDidMount() {

        this.getAllGithubUsers();

    }
    async getAllGithubUsers() {
        var arr1 = []
        await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&from=2020-02-01&sortBy=publishedAt&apiKey=7afb6117be3f4da695ac4a167744208b`)
            .then(res => {
                var data = [];
                data = res.data.articles;
                console.log(data);
                for (let i = 0; i < data.length; i += 3) {

                    let temp = [];

                    for (let j = 0; j < 3; j++) {
                        let result = data[i + j]
                        //   alert(result.urlToImage)
                        if (typeof (result) == "undefined") continue
                        temp.push(
                            <div className="col-sm-4">
                                <div class="card2">
                                    <img class="card-img-top" src={result.urlToImage ? result.urlToImage : laptop} />
                                    <div class="card-body">
                                        <h5 class="card-title car1">Author: {result.author}</h5>
                                        <p class="car1">Description:{result.description}</p>
                                    </div>
                                </div>
                                <br />
                            </div>

                        )

                    }
                    arr1.push(<Carousel.Item>
                        <div className="row">
                            {temp}
                        </div>

                    </Carousel.Item>)

                }


            })
            this.setState({ newsItems: arr1 })

    }

render() {
    return (
        <div >
            



                <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                <a class="image_logo" href="#">
                        <img src={bg}/>
                    </a>
                    <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon "></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                                <Link to="crypto" class="nav-link navigation1" >Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="feature" class="nav-link navigation1" >Features</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="news" class="nav-link navigation1" >News</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="about" class="nav-link navigation1" >About</Link>
                            </li>
                            
                            
                            
                        </ul>
                        
                    </div>
                </nav>

                <div className="container-fluid ">
                    <p className="feature">Latest News</p>
                    <p className="line3">Bitcoin is the simplest way to exchange money at very low cost.</p>
                    <div class="container">
                        <Carousel>
                            {this.state.newsItems}

                        </Carousel>



                    </div>




                </div>
                <div className="container-fluid background_footer">

                    <div className="container">
                        <div className="row">
                        <div className="container">
                            <div className="col-sm-4 col-xs-12">
                                <p className="feat">Contact Us</p>
                                <p className="line9">+163 123 7884
                                Support@Website.com
                                Melbourne, Australia, 105 South Park Avenue</p>
                            
                            </div>
                            <div className="col-sm-4 col-xs-12">
                                <p className="feat">Resources</p>
                                
                                    <p className="line9">How to buy coin</p>
                                
                                    <p className="line9">Coin Overview</p>
                                
                                    <p className="line9">News Blog</p>
                                
                            </div>
                            <div className="col-sm-4 col-xs-12">
                                <p className="feat">Stay connected on</p>
                                <a href="#" className="footer_logo1"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" className="footer_logo1"><i class="fab fa-twitter"></i></a>
                                <a href="#" className="footer_logo1"><i class="fab fa-instagram"></i></a>
                                <a href="#" className="footer_logo1"><i class="fab fa-linkedin"></i></a>

                            </div>
                        </div>
                        </div>     
                    </div>
                </div>

            </div>

        )
    }
}

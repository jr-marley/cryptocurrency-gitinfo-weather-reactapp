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
import news from '../components/news'
import { Link } from 'react-router-dom'
// var nodemailer = require('nodemailer');
//var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
export default class crypto extends Component {

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
                <div className="container ">
                    <p className="feature">Meet Our Team</p>
                    <p className="line3">Our experts in the field of crypto currency can always help you with any of your questions!</p>
                    <div className="row">
                        <div className="col-sm-4 col-xs-12">
                            <div className="card1">
                                <img className="card_img" src={person} alt="Avatar" />
                                <div className="container">
                                    <h4 className="line4"><b>Katy Abrams</b></h4>
                                    <p className="line2">Architect & Engineer</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="card1">
                                <img className="card_img" src={person1} alt="Avatar" />
                                <div className="container ">
                                    <h4 className="line4"><b>Aaron Ballance</b></h4>
                                    <p className="line2">Architect & Engineer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="card1">
                                <img className="card_img" src={person2} alt="Avatar" />
                                <h4 className="line4"><b>Aaron Ballance</b></h4>
                                <p className="line2">Architect & Engineer</p>

                            </div>
                        </div>
                    </div>
                    <br/><br/><br/><br/>

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


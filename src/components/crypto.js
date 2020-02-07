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
import person from '../images/Anoop.jpg'
import person1 from '../images/prasanna.jpg'
import person2 from '../images/Prateek.jpg'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Email from 'emailjs'
import dashboard from '../pages/dashboardpage'
import feature from '../components/feature'
import news from '../components/news'
import Swal from 'sweetalert2'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class crypto extends Component {
    state = {
        newsItems: [],
        value: ''

    }
    
    componentDidMount() {

        this.getAllGithubUsers();

    }

    handleClick() {
        var email =this.textInput.value;
        var subject=`Newsletter Subscription`
        var body=`<div>Newsletter subscription successful</div>`
        Window.Email.Send({
            Host: "smtp.sendgrid.net",
            Username: "cahiya2632",
            Password: "zxcvbnm@123",
            To: email,
            From: "cahiya2632@xrpmail.com",
            Subject: subject,
            Body:body
        }).then(
            message =>{
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    onOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Mail sent successfully'
                  })
            }
        );
        



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
                <div className="background1">



                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="image_logo">
                            <img src={bg} />
                        </a>
                        <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon "></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                <Link to="crypto" class="nav-link navigation" >Home <span class="sr-only">(current)</span></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="feature" class="nav-link navigation">Features</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="news" class="nav-link navigation">News</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="about" class="nav-link navigation">About</Link>
                                </li>
                                

                            </ul>

                        </div>
                    </nav>




                    <div className="container">
                        <div className="row magin">
                            <div className="col-sm-6 col-xs-12">
                                <h2 className="content2">Invest in <span>Bitcoin</span>
                                    <br />Bitcoin Trading</h2>
                                <h6 className="content1">Use modern progressive technologies
                                 of Bitcoin to earn money</h6>
                                <Link to="dashboard" className="btn1">Get Started</Link>

                            </div>
                            <div className="col-sm-6 col-xs-12">
                                <center><img className="laptop_img" src={laptop} /></center>
                            </div>
                        </div>

                    </div>


                </div>
               
                
                
                <div className="container-fluid ">
                    <p className="feature1">Latest News</p>
                    <p className="line3">Bitcoin is the simplest way to exchange money at very low cost.</p>
                    <div class="container">
                        <Carousel>
                            {this.state.newsItems}

                        </Carousel>



                    </div>




                </div>
                <div className="container-fluid " >
                    <p className="feature">Subscribe to our Newsletter</p>
                    <p className="line3">Sign up for our weekly industry updates, insider perspectives and in-depth market analysis.</p>
                    <form className="example" >
                        <input type="email" id="email" ref={(input) => this.textInput = input} placeholder="Enter email" name="email" />
                        <button type="button" onClick={this.handleClick.bind(this)}>Subscribe</button>
                    </form>
                </div>
                <div className="container">
                    <p className="feature">Get Started With Bitcoin</p>
                    <p className="line3">Start learning about Bitcoin with interactive tutorials. It’s fun, easy, and takes only a few minutes!</p>

                    <div className="row">
                        <div className="col-sm-4 col-xs-12">
                        <div className="card1">
                                <center><img className="logo2" src={wallet1} /></center>

                                <p className="title2">Create Your Wallet</p>
                                <p className="line5">Free bitcoin wallets are available for all major operating systems and devices to serve a variety of your needs. For example, choosing a wallet is easy and can be done in minutes.</p>
                                </div>

                        </div>
                        <div className="col-sm-4 col-xs-12 ">
                        <div className="card1">
                                <center><img className="logo2" src={wallet2} /></center>
                                <p className="title2">Get Bitcoin</p>
                                <p className="line5">You can get Bitcoin by accepting it as a payment for goods and services. There are also several ways you can buy Bitcoin.</p>
                                </div>
                        </div>
                        <div className="col-sm-4 col-xs-12 ">
                        <div className="card1">
                                <center><img className="logo2" src={wallet3} /></center>
                                <p className="title2">Spend Bitcoin</p>
                                <p className="line5">There are a growing number of services and merchants accepting Bitcoin all over the world. Use Bitcoin to pay them and rate your experience to help them gain more visibility.</p>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="container ">
                    <p className="feature">Meet Our Team</p>
                    <p className="line3">Our experts in the field of crypto currency can always help you with any of your questions!</p>
                    <div className="row">
                        <div className="col-sm-4 col-xs-12">
                            <div className="card1">
                                <img className="card_img" src={person} alt="Avatar" />
                                <div className="container">
                                    <h4 className="line4"><b>ANOOP NAYAK</b></h4>
                                    <p className="line2">Software Engineer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="card1">
                                <img className="card_img" src={person1} alt="Avatar" />
                                <div className="container ">
                                    <h4 className="line4"><b>PRASANNA PATLA</b></h4>
                                    <p className="line2">Software Engineer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="card1">
                                <img className="card_img" src={person2} alt="Avatar" />
                                <h4 className="line4"><b>PRATEEK VETEKAR</b></h4>
                                <p className="line2">Software Engineer</p>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="container">
                    <p className="feature1">Our Features</p>
                    <p className="line3">Bitcoin is the simplest way to exchange money at very low cost.</p>
                    <div className="row">
                        <div className="col-sm-6 col-xs-12">

                            <img className="logo1" src={phone} />
                            <br /><br />
                            <p className="title">Mobile Apps</p>
                            <p className="line1">Have your Bitcoins always with you, in your pocket! You pay by quickly scanning a QR-code. As a merchant, you receive payments reliably and instantly.</p>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                            <img className="logo1" src={firewall} />
                            <br /><br />
                            <p className="title">Safe & Secure</p>
                            <p className="line1">Over 98% of cryptocurrency is stored securely offline and the rest is protected by industry-leading online security. </p>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-xs-12">

                            <img className="logo1" src={wallet} />
                            <br /><br />
                            <p className="title">Wallet</p>
                            <p className="line1">A Bitcoin wallet can refer to either a wallet program or a wallet file. Wallet programs create public keys to receive satoshis and use the corresponding private keys to spend those satoshis. </p>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                            <img className="logo1" src={support} />
                            <br /><br />
                            <p className="title">Experts Support</p>
                            <p className="line1">Keep track of your crypto: Our clear, user-friendly dashboard helps you see prices and the value of your assets, any time of day, anywhere you are through our website or mobile app.</p>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-xs-12">

                            <img className="logo1" src={ex} />
                            <br /><br />
                            <p className="title">Transactions</p>
                            <p className="line1">Transactions let users spend satoshis. Each transaction is constructed out of several parts which enable both simple direct
                             payments and complex transactions.</p>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                            <img className="logo1" src={stat} />
                            <br /><br />
                            <p className="title">Begineer to expert, We're here.</p>
                            <p className="line1">Whether you’re just starting your crypto journey, or a seasoned expert, you’ll find everything you need to build your crypto portfolio.</p>
                        </div>
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



import React, { Component } from 'react'
import './weatherpage.css'
import bg from '../../images/bg1.jpg';
import axios from 'axios';
import { FormControl, FormCheck } from 'react-bootstrap';
const API_KEY="2c53d4706d09d80378f572c36c12dbc6";

export default class Weatherpage extends Component {
    
    state={
        city:"",
        Location:"",
        temperature:"",
        humidity:"",
        description:""
    }

    //`http://api.openweathermap.org/data/2.5/weather?q=${e.target.city.value},${e.target.country.value}&appid=${API_KEY}&units=metric`

     handleSubmit = async (e) => {
        e.preventDefault()
        var country=e.target.elements.country.value;
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${e.target.city.value},${e.target.country.value}&appid=${API_KEY}&units=metric`
        )
        .then(res => {
          const result = res.data;
          console.log(result.main.temp,result.sys.country)
          this.setState({
            temperature: result.main.temp,
            city: result.name,
            country:result.sys.country,
            humidity:result.main.humidity,
            description:result.weather[0].description,
          });
        })
      }

   
    render() {
        return (
            <div className="container-fluid cls_">
                <div className="row padding" >
                    <div className="col-sm-6 weather_img_class">
                            <center><img src={bg} className="weather_img_class" /></center>
                    </div>
                    <div className="col-sm-6 weather_inputs weather-form-background margin_right">
                        <form  onSubmit={this.handleSubmit}>
                            <div className="row">
                            <div className="col-sm-4">
                                <center><input  className="weather_inputs" type="text" placeholder="city"name="city" /></center>
                            </div>
                            <div className="col-sm-4">
                            <center><input type="text"  className="weather_inputs" placeholder="country" name="country" /></center>
                            </div>
                            <div className="col-sm-4">    
                            <center><button type="submit" className="button">Submit</button></center></div>  </div>
                        </form>
                        
                        <div className="col-sm-12 description_div">
                            <p>city: {this.state.city}</p>
                            <p>Country: {this.state.country}</p>
                            <p>Temperature: {this.state.temperature} </p>
                            <p>Humidity:  {this.state.humidity} </p>
                            <p>Description: {this.state.description} </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

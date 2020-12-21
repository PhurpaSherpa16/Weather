import React, {Component} from 'react';
import Navbar from './navbar';
import './css/index.css';
import { makeStyles } from '@material-ui/core/styles';
import WeatherCard from './card';
import {WeatherApi} from './weatherapi';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
          flexGrow: 1,
        },
      },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            city:'',
            weatherData:[],
            duplicateData:[],
            isLoading:true
        }
    }

    getWeatherData=(data)=>{
        let self = this;
        WeatherApi.getCurrentWeatherData(this.state.city)
        .then(function(response){
          console.log(response.data)  
          self.setState({
            weatherData:response.data,
              isLoading:false
          })
        })
        .catch(function(error){
            console.log(error)
        });
    }
    cityNameset=(event)=>{
        this.setState({
            city:event.target.value
        })
    }

    render(){
        return(
            <div>
            <div id="navDiv">
                <Navbar/>
            </div>
            <div id="bodyDiv">
                <div id="searchdiv">    
                <input type="text" id="searchCountry" onChange={this.cityNameset}
                name="search" autoComplete="off" placeholder="Enter Country to search"/>
                <button id="weatherSearchButton" onClick={this.getWeatherData}>Search</button>
                </div>
                <div id="bodydiv">
                    {this.state.isLoading?
                    <div id="SearchMessageDiv">
                        Enter City or Country Name to See weather Report.  
                    </div>:
                        <div>
                            <WeatherCard weatherData={this.state.weatherData}/>
                        </div>
                    }
                </div>
            </div>
            </div> 
        )
    }
}
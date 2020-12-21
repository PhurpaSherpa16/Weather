import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
export default class WeatherCard extends Component{

    render(){
        let data=this.props.weatherData;
        let icon_url="http://api.openweathermap.org/img/w/~.png";
        let icon = icon_url.replace('~',data.weather.map((val)=>val.icon));
        return(
            <div>
                <Card className='root' id="weatherCardDiv">
                    <CardHeader avatar={
                    <Avatar aria-label="recipe" className='avatar'>{data.sys.country}</Avatar>
                        }
                        title={data.name}
                        subheader={new Date().toDateString()}/>
                    <CardContent >
                        <Typography id="weatherTypo" variant="body2" color="textSecondary" component="p">
                        <table id="weatherTable">
                            <tr>
                                <td id="Wlabel">{data.weather.map((val)=>val.description.toUpperCase())}</td>
                                <td><img id="weatherIcon" src={icon} alt="icon" id="icon"></img></td>
                            </tr>
                            <tr>
                                <td id="Wlabel">Feels Like</td>
                                <td>:{data.main.feels_like}°C.</td>
                            </tr>
                            <tr>
                                <td id="Wlabel">Wind Speed</td>
                                <td>:{data.wind.speed} KM/hr</td>
                            </tr>
                            <tr>
                                <td id="Wlabel">Humidity</td>
                                <td>:{data.main.humidity}%</td>
                            </tr>
                            <tr>
                                <td id="Wlabel">Temperature</td>
                                <td>:{data.main.temp}°C|°F</td>
                            </tr>
                            <tr>
                                <td id="Wlabel">Pressure</td>
                                <td>:{data.main.pressure}K</td>
                            </tr>
                        </table>
                        </Typography>
                    </CardContent>
                </Card>
        </div>
        )
    }
} 
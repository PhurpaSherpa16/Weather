import './App.css';
import Routes from './routes';
import React, {Component} from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import {theme} from './theme' 

export default class App extends Component{
      render(){
        return(
          <ThemeProvider theme={theme}>
            <Routes/>
          </ThemeProvider>
        )
      }
}

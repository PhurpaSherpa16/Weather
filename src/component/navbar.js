import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/MenuOpen'; // change MenuOpen to Subject to change Icon
import {Link} from 'react-router-dom';
import './css/navbar.css';
import { Drawer } from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Person from '@material-ui/icons/Person';
import Input from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default class Navbar extends Component{
    constructor(props){
        super(props);
        this.state={
            openDrawer:false,
        }
      }
      render(){
          return(
              <div class="root" id="navbarDiv">
                  <AppBar position="static">
                      <Toolbar>
                          <IconButton id="navIcon" style={{}} 
                          class="menuButton" edge="start" color="inherit" aria-label="menu"
                          onClick={()=>this.setState({openDrawer:true})}>
                          <MenuIcon/>
                          </IconButton>
                          <Link to="/" style={{textDecoration:'none', color:'white'}} >     
                          <Button id="navButton" color="inherit">Home</Button>
                          </Link>
                          <Link to="/index" style={{textDecoration:'none', color:'white'}} >     
                          <Button id="navButton" color="inherit">Material Ui</Button>
                          </Link>
                          <Link to="/api-call" style={{textDecoration:'none', color:'white'}} >     
                          <Button id="navButton" color="inherit">Covid data</Button>
                          </Link>
                          <Link to="/digitalClock" style={{textDecoration:'none', color:'white'}} >     
                          <Button id="navButton" color="inherit">DigitalClock</Button>
                          </Link>
                          <Link to="/secondComponent" style={{textDecoration:'none', color:'white'}} >     
                          <Button id="navButton" color="inherit">secondClass</Button>
                          </Link>
                          <Button id="navButton" color="inherit">Login</Button>
                      </Toolbar>
                  </AppBar>
                  <Drawer anchor='left' open={this.state.openDrawer} onClose={()=>this.setState({openDrawer:false})} >
                  <div class="MuiAppBar-colorSecondary" style={{height:'100%'}}>
                    <List>
                      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                          <ListItemText primary={text} />
                        </ListItem>
                      ))}
                    </List>
                    <Divider />
                    <List>
                      {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                          <ListItemText primary={text} />
                        </ListItem>
                      ))}
                      <Divider/>
                      <ListItem button key='Account'>
                        <ListItemIcon><Person/></ListItemIcon>
                        <ListItemText primary='Account' />
                      </ListItem>
                      <ListItem button key='Login'>
                        <ListItemIcon><Input/></ListItemIcon>
                        <ListItemText primary='Login' />
                      </ListItem>
                    </List>
                  </div>
                  </Drawer> 
              </div>
          )
      }
}
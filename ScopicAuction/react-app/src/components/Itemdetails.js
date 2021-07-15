import React, {Component} from 'react';
import { get, post, put } from 'axios';
import {Container, Button, Table, Checkbox, TextField} from '@material-ui/core';

const baseURL = 'https://localhost:44383/api';

export default class Itemdetails extends Component{

    constructor(props){
        super(props);
        


        this.state = {value: ''};
        this.state = {isBot: false};
        this.state = { time: {}, seconds: 0 };
        this.timer = 0;

        
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        

        
        this.state={pageid: props.match.params.id};


    }

    handleChange = (event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      
      console.log('ibb ' + name);
      
      this.setState({
        [name]: value
      });

    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(this.state.itm.price >= this.state.value){
          alert("You must bid with amount greater than the current price !!")
          return ;
        }
        else{
          put(baseURL + '/item/update', { itemId: Number(this.state.itm.itemId), 
            lastuserid: Number(JSON.parse(localStorage.getItem('user'))), 
            price: Number(this.state.value)  } )
          .then((response) => {
              console.log(response);
              //this.props.history.push('/Itemlist');
          }, (error) => {        
              console.error(error.response);
          });

        }
          
        if(this.state.isBot){
          post(baseURL + '/bot/create', { itemId: Number(this.state.itm.itemId), 
            lastuserid: Number(JSON.parse(localStorage.getItem('user')))} )
          .then((response) => {
              console.log(response);
              //this.props.history.push('/Itemlist');
          }, (error) => {        
              console.error(error.response);
          });

        }
       
        this.props.history.push('/Itemlist');
        
    } //handleSubmit

    secondsToTime(secs){
      let days = Math.floor(secs / (60 * 60 * 24));

      let hours = Math.floor(secs / (60 * 60));
  
      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);
  
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
  
      let obj = {
        "d": days,
        "h": hours,
        "m": minutes,
        "s": seconds
      };
      return obj;
    }
  
      
    startTimer() {
      if (this.timer === 0 && this.state.seconds > 0) {
        this.timer = setInterval(this.countDown, 1000);
      }
    }
  
    countDown() {
      // Remove one second, set state so a re-render happens.
      let seconds = this.state.seconds - 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
      
      // Check if we're at zero.
      if (seconds === 0) { 
        clearInterval(this.timer);
      }
    }

    /*inputchangehandler = (event) => {
      this.setState = ({
        id: event.target.value
      })
    }*/
      
  componentDidMount(){

    //timer
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    //this.startTimer();

    console.log('id2' + this.state.pageid);

  
      get(baseURL + '/item/getbyid/', {  params: {  id: this.state.pageid  } })
      .then( (response) => {
        this.setState({ itm: response.data });

        this.setState({seconds: this.state.itm.closeDate});
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        this.startTimer();

        console.log(response);
        console.log(this.state.itm);
        console.log('true');
      })
      .catch(function (error) {
        console.log('error' + error);
      }); 
  
  } //componentDidMount
  

  render(){
  
     
    if (this.state.itm !== undefined) {
    
      //this.setState({seconds: this.state.itm.closeDate});
      //this.startTimer();

        return (
  
          <Container component="main">
          <div className="App">
          <Table className="mt-4">
        <thead><tr>
        <th>              
          <form id="main-login" onSubmit={this.handleSubmit}>
                  <h2>Item Details</h2>
                  <TextField variant="outlined" margin="normal"
                  id="itemid" label="Item Id" name="itemid" readOnly
                  value={this.state.itm.itemId} />
                  <br/>
                  <TextField variant="outlined" margin="normal"
                  id="itemname" label="Item Name" name="itemname" readOnly
                  value={this.state.itm.itemName} />
                  <br/>
                  <TextField variant="outlined" margin="normal" readOnly
                  id="description" label="Description" name="description"
                  value={this.state.itm.description} />
                  <br/>
                  <TextField variant="outlined" margin="normal"
                  id="price" label="Price" name="price" readOnly
                  value={this.state.itm.price} />
                  <br/>
                  <TextField variant="outlined" margin="normal"
                  id="bid" label="Bid" name="bid" autoFocus  type="number"
                  value={this.state.value} onChange={this.handleChange}  />
                  <br/><br/>
                  <Checkbox name="isBot" checked={this.state.isBot}
                  onChange={this.handleChange} /> <b>Avtivate The Bot</b>
                  <br/><br/>
                  <Button type="submit" variant="contained" color="primary"> Confirm </Button>

              </form>
            </th>
        <th>Remain Time:  days: {this.state.time.d} hours: {this.state.time.h} minutes: {this.state.time.m} seconds: {this.state.time.s}</th>
        </tr></thead></Table>

          </div>
          </Container>
                
      
        ); //return
    } //if
    else
    {
      return (<Container component="main"> <div className="App">
              <form id="main-login" onSubmit={this.handleSubmit}>
              <h2>Loading...</h2></form></div></Container>);
    }
  
    } //render

}


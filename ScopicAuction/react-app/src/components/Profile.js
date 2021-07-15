import React, {Component} from 'react';
import { post } from 'axios';
import {Container, Button, TextField} from '@material-ui/core';

const baseURL = 'https://localhost:44383/api/user';

export default class Profile extends Component{

    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
       
        post(baseURL + '/amount', { userid: JSON.parse(localStorage.getItem('user')), bidAmount: JSON.parse(this.state.value) })
        .then((response) => {
            console.log(response);
            this.props.history.push('/Itemlist');
        }, (error) => {        
            console.error(error.response);
        });
        
    } //handleSubmit

      
  render(){
      return (
        <Container component="main">
        <div className="App">
            <form id="main-login" onSubmit={this.handleSubmit}>
                <h2>User Profile</h2>
                <TextField variant="outlined" margin="normal"
                required id="Amount" label="Amount" name="Amount" autoFocus
                value={this.state.value} onChange={this.handleChange}  />
                <br/>
                <Button type="submit" variant="contained" color="primary"> Confirm </Button>
            </form>
        </div>
        </Container>

      );

    } //render

}


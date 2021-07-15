import React, {Component} from 'react';
import { post } from 'axios';
import {Container, Button, TextField} from '@material-ui/core';

const baseURL = 'https://localhost:44383/api/user';

export default class Itemlist extends Component{

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
       
        post(baseURL + '/login', { username: this.state.value })
        .then((response) => {
            console.log(response);
            localStorage.setItem("user", JSON.stringify(response.data.userId));
            this.props.history.push('/Itemlist');
        }, (error) => {        
            alert('Please, Enter correct user !!');
            console.error(error.response);
        });
        
    } //handleSubmit

      
  render(){
      return (
        <Container component="main">
        <div className="App">
            <form id="main-login" onSubmit={this.handleSubmit}>
                <h2>User Login</h2>
                <TextField variant="outlined" margin="normal"
                required id="user" label="User1 / User2 / User3" name="user" autoFocus
                value={this.state.value} onChange={this.handleChange}  />
                <br/>
                <TextField variant="outlined" margin="normal"
                id="password" label="Password" name="password" />
                <br/>
                <Button type="submit" variant="contained" color="primary"> Sign In </Button>
            </form>
        </div>
        </Container>

      );

    } //render

}


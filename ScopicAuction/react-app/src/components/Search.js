import React, {Component} from 'react';
import { get } from 'axios';
import {Container, Button, TextField, Table} from '@material-ui/core';

const baseURL = 'https://localhost:44383/api/item';

export default class Search extends Component{

    constructor(props){
        super(props);
        this.state = {itms: [], value:''};

        this.state = {outitms:[]};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeValue(event){
        //outitms = "ss";
        console.log(event);
    }

    handleChange(event) {
        console.log(event);
        this.setState({value: event.target.value});
        this.setState({itms: event.target.itms});
    }

    handleSubmit = (e) => {
        e.preventDefault();
       
        (async() => {
        get(baseURL + '/search', { params: { str: this.state.value} })
        .then((response) => {
            console.log(response);
            this.setState({ outitms: response.data.items });
            console.log(this.state.outitms);
        }, (error) => {        
            console.error(error.response);
        });
    })();
        
    } //handleSubmit

      
  render(){

    console.error('eheh' + this.state.outitms);

    if (this.state.outitms && this.state.outitms.length) 
    {
        console.error('yyy' + this.state.outitms);
    }
    else
    {
        console.error('zz' + this.state.outitms);
    }
    

    const { ooutitms = this.state.outitms , onChangeValue } = this.props;

   
    //console.error('essh' + JSON.parse(outitms.items));
    //outitms = this.state.outitms;

    const Test = ({ooutitms}) => (
        <div>
            {ooutitms.map(outitm => (
                <div>
                    <h3>{outitm.itemid}</h3>
                </div>
            ))}
        </div>
    );

    console.error('totp' + Test);


    return (
        <Container component="main">
        <div className="App">
            <form id="main-login" onSubmit={this.handleSubmit}>
            <Table className="mt-4" striped bordered hover size="sm">
            <thead>
                <tr>
                <th><TextField variant="outlined" margin="normal"
                id="outItem" label="outItem" name="outItem" autoFocus
                value={ooutitms} onChange={onChangeValue}  /></th>
                <th><TextField variant="outlined" margin="normal"
                id="Item1" label="Item1" name="Item1" autoFocus
                value={this.state.value} onChange={this.handleChange}  /></th>
                <th><Button type="submit" variant="contained" color="primary"> Search </Button></th>
                </tr>
              </thead>
            </Table>
            </form>
        </div>
        </Container>

      );

    } //render

}


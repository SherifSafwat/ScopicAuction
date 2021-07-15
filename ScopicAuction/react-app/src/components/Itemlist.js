import React, {Component} from 'react';
import { get } from 'axios';
import { Link } from 'react-router-dom'

import {Container, Button, TextField, Table} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

const baseURL = 'https://localhost:44383/api';

const renderDetailsButton = (params) => {
  return (
      <strong>
          <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginLeft: 16 }}>
              <Link  to={'/ItemDetails/id=' + params.id } > Bid Now </Link>
          </Button>
      </strong>
  )
}

const columns = [
  //{ field: 'itemId', headerName: 'ID', width: 90 },
  {
    field: 'itemName',
    headerName: 'Item name',
    width: 150,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    sortable: true,
    width: 110,
  },  
  {
    field: 'bid',
    headerName: 'Bid',
    width: 150,
    renderCell: renderDetailsButton,
    disableClickEventBubbling: true,
},
];


export default class Itemlist extends Component{

  constructor(props){
    super(props);
    this.state={value: '', itms:[]};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    
    get(baseURL + '/item/search', { params: { str: this.state.value} })
    .then((response) => {
        console.log(response);
        this.setState({ itms: response.data.items });
        console.log(this.state.itms);
    }, (error) => {        
        console.error(error.response);
    });
    
} //handleSubmit


  componentDidMount(){

    get(baseURL + '/item')
    .then( (response) => {
      this.setState({ itms: response.data  });
      console.log(this.state.itms);
    })
    .catch(function (error) {
      console.log(error);
    }); 

  } //componentDidMount



  render(){

    if (this.state.itms !== undefined) {
    
    const rows = this.state.itms.map((row) => {
      const { itemId, ...rest } = row;
      return { id: itemId, ...rest };
    });


    return (
      <Container component="main">
      <div className="App">

        <Table className="mt-4">
        <thead><tr>
        <th><Button variant="contained" color="default">
          <Link  to='/Profile/'> My Profile </Link></Button></th>
        <th><form id="main-login" onSubmit={this.handleSubmit}>
            <Table className="mt-4">
            <thead>
                <tr><th><TextField variant="outlined" margin="normal"
                id="SearchItem" label="SearchItem" name="SearchItem" autoFocus
                value={this.state.value} onChange={this.handleChange}  /></th>
                <th><Button type="submit" variant="contained" color="primary"> 
                Search </Button></th>
                </tr>
              </thead>
            </Table>
            </form></th>

        </tr></thead>
        </Table>

        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}/>
        </div>

    </div>
    </Container>
       
    ); //retrun
  } //if
  else
  {
    return (<Container component="main"> <div className="App">
            <form id="main-login" onSubmit={this.handleSubmit}>
            <h2>Loading...</h2></form></div></Container>);
  }

  } //render

}


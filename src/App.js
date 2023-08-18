
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component }  from 'react';
import * as BooksAPI from "./BooksAPI";
import Home from "./compoments/Home";
import Search from "./compoments/Search";
import Libarary from './compoments/Libarary';

class App extends React.Component {
  state = {
    libararysearch: [],
    showSearchPage: false,
    search : "",
    books: [],
    loading: false,

  
  };
  

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books
      });
    });
  }

  change = async (book, shelf) => {
    await BooksAPI.getAll().then((books) => {
      this.setState({
        books,
      });
    });
    await BooksAPI.update(book, shelf);
    this.Booking(this.state.search)

  }


  Searching =  (event) => {
    this.setState({
     search: event.target.value,
   });
   console.log(this.state.search);
   this.Booking(this.state.search)

 }

 Booking = async (search) => {
   BooksAPI.search(search).then((res) => {
    if (res && !res.error) {
      this.setState({
        libararysearch: res.map((booksSearch) => {
          this.state.books.forEach((book) => {
            if (booksSearch.id === book.id) booksSearch.shelf = book.shelf
          })
          return booksSearch;
        }),
        loading: true
      });
    } else {
      this.setState({
        libararysearch: `No books like: " ${this.state.search} "`,
        loading: false
      })
    }
  }); 
  console.log(this.state.libararysearch);
};



  render () {
    return (

    
    <Router> 
    <div className="app">
     

    <Route exact path="/" render={() => (
          <Home
          change={this.change}
           books={this.state.books}  
           
          />
        )}/>

        <Route exact path="/search" render={() => (
          <Search
          Searching = {this.Searching}
          search={this.state.search}
          libararysearch={this.state.libararysearch}
          change={this.change}
          loading={this.state.loading}
          
         
          />
        )}/>
        
      
    </div>
   </Router>
    )
  }
   
}
  

export default App;

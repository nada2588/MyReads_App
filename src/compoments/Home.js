import React from 'react';
import {
    Link
  } from "react-router-dom";
import Line from './Line';
const Home = ({books,change}) => {
  return (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">

      {/* line */}
      <div>
        
        <Line bookshelftitle="Currently Reading"  books={books} done="currentlyReading"
         change={change}/>
        <Line bookshelftitle="Want To Read"  books={books} done="wantToRead" 
        change={change} />
        <Line bookshelftitle="Read" books={books} done="read"
         change={change} />

      </div>
       </div>
       
          <div className="open-search">
            <Link to= "/Search" className="open-search_btn " >Add a book</Link>

          </div>
        </div>
  )
}

export default Home;

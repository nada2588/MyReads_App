import React from 'react'
import {
  Link
} from "react-router-dom";
import Booksearch from './Booksearch';

const Search = ({Searching,search,libararysearch,change,loading}) => {
  return (
    <div className="search-books">
          <div className="search-books-bar">
          
            <Link to= "/" className="close-search" >Close</Link>
            <div className="search-books-input-wrapper">

              
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
               
                onChange={Searching}
              />

            </div>
            
          </div>
          <Booksearch libararysearch={libararysearch} change={change} loading={loading}/>
        

        </div>
  )
}

export default Search

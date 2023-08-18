import React from 'react'
import Libarary from './Libarary'
import { PropTypes } from "prop-types";


const Line = ({bookshelftitle ,books, done,change}) => {


  console.log(books)

  
   
  return (
    <div>
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelftitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {/*Libarary*/}
        { books.filter((book)=> book.shelf === done).map((book)=>(
        
        <Libarary  book={book} key={book.id} change={change}/>
     ))}

   </ol>
   </div>
   </div> 
   </div>
   
  )
}
Line.propTypes = {
    bookshelftitle: PropTypes.string.isRequired,
}


export default Line

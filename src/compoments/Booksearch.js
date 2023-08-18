import Libarary from './Libarary'
import React, { Component } from 'react'


export default class Booksearch extends Component {
  render() {
    return (
        <div className="search-books-results">
        <ol className="books-grid">
        {
                     this.props.loading ? (

                         this.props.libararysearch.map((book)=>(
        
                         <Libarary key={book.id}  book={book} change={this.props.change}/>
        
                         ))
                     ): (
                         this.props.libararysearch
                     )
                 }
        </ol>
        
      </div>
    )
  }
}


// import React from "react";
import React, { Component } from 'react';
// import Book from "../components/Book";

class Bookshelf extends Component {

  handleRemove =() =>{
    
    // let bookid = parseInt(event.target.parentElement.id)

    this.props.removeOneBook(bookid)
  } 

  render() { 
    
    const displaySelectedBooks = this.props.selectedBooks.map(book => { 

    return (
      <div key={book.id} onClick={this.handleRemove} id={book.id}>
        <h2> {book.title}</h2>
        <img src={book.img}/>
      </div>
  )}
  )

    return (  
      <div>
      <h1>Book Shelf</h1>
      <ul>{displaySelectedBooks}</ul>
    </div>
    );
  }
}
 
export default Bookshelf;

import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state={
    books: [],
    selectedBooks: []
  }

  componentDidMount() {
    fetch("http://localhost:3005/books")
    .then(resp => resp.json())
    .then(books => this.setState({ books: books }))
  }

  handleClickedBooks = (bookid) => {
    
    const clickedBook = this.state.books.find(book => book.id === bookid)
    
    if (this.state.selectedBooks.includes(clickedBook)) {
      alert("This book was selected already. ")
    } else {
      const updatedSelectedBooks = [...this.state.selectedBooks, clickedBook]
      this.setState({ selectedBooks: updatedSelectedBooks });
    }

  }

  removeOneBook = (bookid) => {
    
    const updatedSelectedBooks = this.state.selectedBooks.filter(book => book.id !== bookid)
    this.setState({ selectedBooks: updatedSelectedBooks });
  }

  addABook = (newBook) => {
    const updatedBooks = [...this.state.books, newBook]
    this.setState({ books:updatedBooks  });
  }

  render() {
    
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleClickedBooks={this.handleClickedBooks} addABook={this.addABook}/>
        <Bookshelf selectedBooks={this.state.selectedBooks} removeOneBook={this.removeOneBook} />
      </div>
    );
  }
}

export default App;

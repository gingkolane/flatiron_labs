import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img:''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit =(event) => {
    
    event.preventDefault()

    const newBook = {
      title: this.state.title,
      author: this.state.author,
      img: this.state.img
    }

    this.props.addABook(newBook);
  }

  render() {
    return (
      <div>
        <h1>Enter a new book</h1>
        <form onSubmit={this.handleSubmit}>
          <label> Name:
            <input type="text" name="title" value={this.state.title}  onChange={this.handleChange}/>
          </label>
          < br />
          <label> Author:
            <input type="text" name="author" value={this.state.author}  onChange={this.handleChange}/>
          </label> 
          < br />
          <lable> Image:
            <input type="text" name="img" value={this.state.img}  onChange={this.handleChange}/>
          </lable>

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;

import React, { Component } from 'react';
import { connect } from 'react-redux'

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    })
  }

  render() {
    return(
      <div>
        Create Todo Component
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder='add todo' onChange={(event) => this.handleChange(event)} value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addTodo: (formData) => dispatch({ type: "ADD_TODO", payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);

import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Form.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <>
      <form className="form">
        <input
          type="text"
          onChange={this.handleChange}
        />
      </form>
      <div className="form-value">
        {this.state.value}
      </div>
      </>
    );
  }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
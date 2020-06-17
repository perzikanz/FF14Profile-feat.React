import React from 'react';
import ReactDOM, { render } from "react-dom";


function Button(props) {
  return(
    <button onClick={() => getCharaData(props.value)}>
      押してね
    </button>
  );
}

class Form extends React.Component {
  constructor(){
    super();
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){
    return (
      <div>
        <label>
          Lodestone ID：
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <Button value={this.state.value} />
      </div>
    );   
  }
}


function getCharaData(id){ 
  fetch(`https://xivapi.com/character/${id}?data=CJ`).then(response => response.json()).then(jsonData => console.log(jsonData));
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);
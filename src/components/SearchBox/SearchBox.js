import React, { Component } from "react";
import './SearchBox.css';

function Button(props) {
  return(
    <button onClick={() => getCharaData(props.lodestoneId, props.setCharacterData)}>
      押してね
    </button>
  );
}

export class SearchBox extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <label>
          Lodestone ID：
          <input type="text"
            value={this.props.lodestoneId}
            onChange={this.props.handleChange} 
          />
        </label>
        <Button lodestoneId={this.props.lodestoneId} setCharacterData={this.props.setCharacterData} />
      </div>
    );
  }
}

function getCharaData(lodestoneId, setCharacterData){ 
  fetch(`https://xivapi.com/character/${lodestoneId}?data=CJ`).then(response => response.json()).then(jsonData => {setCharacterData(jsonData);});
}

// export default SearchBox;
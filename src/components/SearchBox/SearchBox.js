import React from 'react';
import './SearchBox.css';

function Button(props) {
  return (
    <button
      onClick={() => {
        props.startReloading();
        props.getCharacterData(props.lodestoneId);
      }}
    >
      押してね
    </button>
  );
}

export class SearchBox extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <label>
          Lodestone ID：
          <input
            type="text"
            value={this.props.lodestoneId}
            onChange={this.props.handleChange}
          />
        </label>
        <Button
          lodestoneId={this.props.lodestoneId}
          getCharacterData={this.props.getCharacterData}
          startReloading={this.props.startReloading}
        />
      </div>
    );
  }
}

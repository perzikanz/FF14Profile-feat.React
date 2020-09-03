import React from 'react';
import './SearchBox.css';
import Button from '../Button';

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
        <Button lodestoneId={this.props.lodestoneId} />
      </div>
    );
  }
}

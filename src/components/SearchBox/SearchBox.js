import React from 'react';
import { connect } from 'react-redux';
import './SearchBox.css';
import { Button } from '../Button';

const ConnectedButton = connect()(Button);

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
        <ConnectedButton lodestoneId={this.props.lodestoneId} />
      </div>
    );
  }
}

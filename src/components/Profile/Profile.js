import React from 'react';
import './Profile.css';
import SearchBox from '../SearchBox';
import JobList from '../JobList';
import { fetchProfileData } from '../../redux/character/characterAction';

export class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      lodestoneId: '22657106', // 22728375
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ lodestoneId: event.target.value });
  }

  render() {
    return (
      <>
        <div>
          <SearchBox
            lodestoneId={this.state.lodestoneId}
            handleChange={this.handleChange}
            getCharacterData={this.getCharacterData}
            startReloading={this.startReloading}
          />
          {this.props.isLoading ? (
            <div>ロード中...</div>
          ) : (
            <>
              <div>{this.props.name}</div>
              <div>
                {this.props.charaImgSrc ? (
                  <img
                    className="profileImage"
                    src={this.props.charaImgSrc}
                    alt="プロフィール画像"
                  />
                ) : (
                  <span>ここに画像が出ます</span>
                )}
              </div>
              <div className="job">
                <p>ジョブレベル</p>
                <JobList />
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

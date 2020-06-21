import React from 'react';
import ReactDOM, { render } from "react-dom";
import './index.css';

import alc from './JobIcons/alc.png';

function Button(props) {
  return(
    <button onClick={() => getCharaData(props.lodestoneId, props.setCharacterData)}>
      押してね
    </button>
  );
}

function getCharaData(lodestoneId, setCharacterData){ 
  fetch(`https://xivapi.com/character/${lodestoneId}?data=CJ`).then(response => response.json()).then(jsonData => {setCharacterData(jsonData);});
}

class Profile extends React.Component {
  constructor(){
    super();
    this.state = {
      lodestoneId: "", // 22728375
      characterData: {
        name: "キャラクター名",
        imgSrc: "",
        job: [
          {jobName: "pld", ClassID: 1,  Level: "-"},
          {jobName: "war", ClassID: 3,  Level: "-"},
          {jobName: "drk", ClassID: 32, Level: "-"},
          {jobName: "gnb", ClassID: 37, Level: "-"},
          {jobName: "whm", ClassID: 2,  Level: "-"},
          {jobName: "sch", ClassID: 4,  Level: "-"},
          {jobName: "ast", ClassID: 29, Level: "-"},
          {jobName: "mnk", ClassID: 34, Level: "-"},
          {jobName: "drg", ClassID: 6,  Level: "-"},
          {jobName: "nin", ClassID: 26, Level: "-"},
          {jobName: "sam", ClassID: 33, Level: "-"},
          {jobName: "brd", ClassID: 5,  Level: "-"},
          {jobName: "mcn", ClassID: 31, Level: "-"},
          {jobName: "dnc", ClassID: 38, Level: "-"},
          {jobName: "blm", ClassID: 7,  Level: "-"},
          {jobName: "smn", ClassID: 26, Level: "-"},
          {jobName: "rdm", ClassID: 35, Level: "-"},
          {jobName: "blu", ClassID: 36, Level: "-"},
          {jobName: "crp", ClassID: 8,  Level: "-"},
          {jobName: "bsm", ClassID: 9,  Level: "-"},
          {jobName: "arm", ClassID: 10, Level: "-"},
          {jobName: "gsm", ClassID: 11, Level: "-"},
          {jobName: "ltw", ClassID: 12, Level: "-"},
          {jobName: "wvr", ClassID: 13, Level: "-"},
          {jobName: "alc", ClassID: 14, Level: "-"},
          {jobName: "cul", ClassID: 15, Level: "-"},
          {jobName: "min", ClassID: 16, Level: "-"},
          {jobName: "btn", ClassID: 17, Level: "-"},
          {jobName: "fsh", ClassID: 18, Level: "-"}, 
        ]
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.setCharacterData = this.setCharacterData.bind(this);
  }

  handleChange(event) {
    this.setState({lodestoneId: event.target.value});
  }

  setCharacterData(data){
    const ClassJobs = data.Character.ClassJobs;
    const jobs = ClassJobs.map((job) => {
      let jobs = {ClassID: job.ClassID,
                  Level: job.Level};
      return jobs;
    });
    this.setState({characterData: {
      name: data.Character.Name,
      imgSrc: data.Character.Portrait,
      job: jobs
    }});
    console.log(this.state.characterData.job);
  }

  render() {
    return (
      <div>
        <div>
        <label>
          Lodestone ID：
          <input type="text"
            value={this.state.lodestoneId}
            onChange={this.handleChange} 
          />
        </label>
        <Button lodestoneId={this.state.lodestoneId} setCharacterData={this.setCharacterData} />
        </div>
        <div>{this.state.characterData.name}</div>
        <div>
          {this.state.characterData.imgSrc ? 
          <img className="profileImage"　src={this.state.characterData.imgSrc} alt="プロフィール画像" />: 
          <span>ここに画像が出ます</span>}
        </div>
        <div className="job">
          <p>ジョブレベル</p>
          <JobList job={this.state.characterData.job}  key={this.state.characterData.job.ClassID}/>
        </div>
      </div>
    );
  }
}


function JobList(props){
  const th = props.job.map((job, i) => {
    if(i <= 6) {
      return (
      <li key={job.jobName}>
        <img src={alc} />
        <div>{job.Level}</div>
      </li>
      );
    }
  });
  const dps = props.job.map((job, i) => {
    if(i < 18) {
      if(i > 6){
        return (
        <li key={job.jobName}>
          <img src={alc} />
          <div>{job.Level}</div>
        </li>
        );
      }
    }
  });
  const gc = props.job.map((job, i) => {
    if(i >= 18) {
      return (
      <li key={job.jobName}>
        <img src={alc} />
        <div>{job.Level}</div>
      </li>
      );
    }
  }); 
  
  return (
    <div>
      <ul className="job-list">{th}</ul>
      <ul className="job-list">{dps}</ul>
      <ul className="job-list">{gc}</ul>
    </div>
  );
}


ReactDOM.render(
  <Profile />,
  document.getElementById('root')
);
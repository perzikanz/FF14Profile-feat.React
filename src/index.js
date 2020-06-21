import React from 'react';
import ReactDOM, { render } from "react-dom";
import './index.css';
import SearchBox from './components/SearchBox';
import alc from './JobIcons/alc.png';


class Profile extends React.Component {
  constructor(){
    super();
    this.state = {
      lodestoneId: "", // 22728375
      characterData: {
        name: "キャラクター名",
        imgSrc: "",
        job: [
          {jobName: "pld", JobID: 19, Level: "-"},
          {jobName: "war", JobID: 21, Level: "-"},
          {jobName: "drk", JobID: 32, Level: "-"},
          {jobName: "gnb", JobID: 37, Level: "-"},
          {jobName: "whm", JobID: 24, Level: "-"},
          {jobName: "sch", JobID: 28, Level: "-"},
          {jobName: "ast", JobID: 33, Level: "-"},
          {jobName: "mnk", JobID: 20, Level: "-"},
          {jobName: "drg", JobID: 22, Level: "-"},
          {jobName: "nin", JobID: 30, Level: "-"},
          {jobName: "sam", JobID: 34, Level: "-"},
          {jobName: "brd", JobID: 23, Level: "-"},
          {jobName: "mcn", JobID: 31, Level: "-"},
          {jobName: "dnc", JobID: 38, Level: "-"},
          {jobName: "blm", JobID: 25, Level: "-"},
          {jobName: "smn", JobID: 27, Level: "-"},
          {jobName: "rdm", JobID: 35, Level: "-"},
          {jobName: "blu", JobID: 36, Level: "-"},
          {jobName: "crp", JobID: 8,  Level: "-"},
          {jobName: "bsm", JobID: 9,  Level: "-"},
          {jobName: "arm", JobID: 10, Level: "-"},
          {jobName: "gsm", JobID: 11, Level: "-"},
          {jobName: "ltw", JobID: 12, Level: "-"},
          {jobName: "wvr", JobID: 13, Level: "-"},
          {jobName: "alc", JobID: 14, Level: "-"},
          {jobName: "cul", JobID: 15, Level: "-"},
          {jobName: "min", JobID: 16, Level: "-"},
          {jobName: "btn", JobID: 17, Level: "-"},
          {jobName: "fsh", JobID: 18, Level: "-"}, 
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
      let jobs = {JobID: job.JobID,
                  Level: job.Level};
      return jobs;
    });
    this.setState({characterData: {
      name: data.Character.Name,
      imgSrc: data.Character.Portrait,
      job: jobs
    }});
  }

  render() {
    return (
      <div>
        <SearchBox lodestoneId={this.state.lodestoneId} handleChange={this.handleChange} setCharacterData={this.setCharacterData} />
        <div>{this.state.characterData.name}</div>
        <div>
          {this.state.characterData.imgSrc ? 
          <img className="profileImage"　src={this.state.characterData.imgSrc} alt="プロフィール画像" />: 
          <span>ここに画像が出ます</span>}
        </div>
        <div className="job">
          <p>ジョブレベル</p>
          <JobList job={this.state.characterData.job} />
        </div>
      </div>
    );
  }
}


function JobList(props){
  const th = props.job.map((job, i) => {
    if(i <= 6) {
      return (
      <li key={job.JobID}>
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
        <li key={job.JobID}>
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
      <li key={job.JobID}>
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
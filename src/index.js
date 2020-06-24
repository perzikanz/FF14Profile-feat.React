import React from 'react';
import ReactDOM, { render } from "react-dom";
import './index.css';
import SearchBox from './components/SearchBox';

import pld from './JobIcons/pld.png';
import war from './JobIcons/war.png';
import drk from './JobIcons/drk.png';
import gnb from './JobIcons/gnb.png';
import whm from './JobIcons/whm.png';
import sch from './JobIcons/sch.png';
import ast from './JobIcons/ast.png';
import mnk from './JobIcons/mnk.png';
import drg from './JobIcons/drg.png';
import nin from './JobIcons/nin.png';
import sam from './JobIcons/sam.png';
import brd from './JobIcons/brd.png';
import mcn from './JobIcons/mcn.png';
import dnc from './JobIcons/dnc.png';
import blm from './JobIcons/blm.png';
import smn from './JobIcons/smn.png';
import rdm from './JobIcons/rdm.png';
import blu from './JobIcons/blu.png';
import crp from './JobIcons/crp.png';
import bsm from './JobIcons/bsm.png';
import arm from './JobIcons/arm.png';
import gsm from './JobIcons/gsm.png';
import ltw from './JobIcons/ltw.png';
import wvr from './JobIcons/wvr.png';
import alc from './JobIcons/alc.png';
import cul from './JobIcons/cul.png';
import min from './JobIcons/min.png';
import btn from './JobIcons/btn.png';
import fsh from './JobIcons/fsh.png';

import gla from './JobIcons/gla.png';
import mrd from './JobIcons/mrd.png';
import cnj from './JobIcons/cnj.png';
import pgl from './JobIcons/pgl.png';
import lnc from './JobIcons/lnc.png';
import rog from './JobIcons/rog.png';
import arc from './JobIcons/arc.png';
import thm from './JobIcons/thm.png';
import acn from './JobIcons/acn.png';

class Profile extends React.Component {
  constructor(){
    super();
    this.state = {
      lodestoneId: "", // 22728375 / 22657106
      characterData: {
        name: "キャラクター名",
        charaImgSrc: "",
        job: [
          {jobName: "pld", JobID: 19, Level: "-", img: pld},
          {jobName: "war", JobID: 21, Level: "-", img: war},
          {jobName: "drk", JobID: 32, Level: "-", img: drk},
          {jobName: "gnb", JobID: 37, Level: "-", img: gnb},
          {jobName: "whm", JobID: 24, Level: "-", img: whm},
          {jobName: "sch", JobID: 28, Level: "-", img: sch},
          {jobName: "ast", JobID: 33, Level: "-", img: ast},
          {jobName: "mnk", JobID: 20, Level: "-", img: mnk},
          {jobName: "drg", JobID: 22, Level: "-", img: drg},
          {jobName: "nin", JobID: 30, Level: "-", img: nin},
          {jobName: "sam", JobID: 34, Level: "-", img: sam},
          {jobName: "brd", JobID: 23, Level: "-", img: brd},
          {jobName: "mcn", JobID: 31, Level: "-", img: mcn},
          {jobName: "dnc", JobID: 38, Level: "-", img: dnc},
          {jobName: "blm", JobID: 25, Level: "-", img: blm},
          {jobName: "smn", JobID: 27, Level: "-", img: smn},
          {jobName: "rdm", JobID: 35, Level: "-", img: rdm},
          {jobName: "blu", JobID: 36, Level: "-", img: blu},
          {jobName: "crp", JobID: 8,  Level: "-", img: crp},
          {jobName: "bsm", JobID: 9,  Level: "-", img: bsm},
          {jobName: "arm", JobID: 10, Level: "-", img: arm},
          {jobName: "gsm", JobID: 11, Level: "-", img: gsm},
          {jobName: "ltw", JobID: 12, Level: "-", img: ltw},
          {jobName: "wvr", JobID: 13, Level: "-", img: wvr},
          {jobName: "alc", JobID: 14, Level: "-", img: alc},
          {jobName: "cul", JobID: 15, Level: "-", img: cul},
          {jobName: "min", JobID: 16, Level: "-", img: min},
          {jobName: "btn", JobID: 17, Level: "-", img: btn},
          {jobName: "fsh", JobID: 18, Level: "-", img: fsh},
        ],
        class: [
          {className: "gla", classID: 1,  img: gla},
          {className: "mrd", classID: 3,  img: mrd},
          {className: "cnj", classID: 6,  img: cnj},
          {className: "pgl", classID: 2,  img: pgl},
          {className: "lnc", classID: 4,  img: lnc},
          {className: "rog", classID: 29, img: rog},
          {className: "arc", classID: 5,  img: arc},
          {className: "thm", classID: 7,  img: thm},
          {className: "acn", classID: 26, img: acn},
        ],
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.setCharacterData = this.setCharacterData.bind(this);
    this.getCharacterData = this.getCharacterData.bind(this);
  }

  componentDidMount() {

  }

  handleChange(event) {
    this.setState({lodestoneId: event.target.value});
  }

  setCharacterData(data){
    const ClassJobs = data.Character.ClassJobs;
    const currentJobs = this.state.characterData.job;
    const currentClass = this.state.characterData.class;

    // Levelだけを更新した新しいJobデータ
    let nextJob = currentJobs.map((currentJob) => {
      const targetJobID = currentJob.JobID; // 目的のジョブのJobID
      // 取ってきたデータの中から、目的のjobのデータだけを取り出す
      const targetJob = ClassJobs.find((fetchedJob) => {
        return fetchedJob.JobID === targetJobID;
      })
      const unID = targetJob.UnlockedState.ID;
      let imgSrc = currentJob.img;
      if(unID !== null && (unID < 8 || unID === 29 || unID === 26)){
        const targetClass = currentClass.find((classes) => {
          return classes.classID === unID;
        })
        imgSrc = targetClass.img;
      }
      return {
        jobName: currentJob.jobName,
        JobID: currentJob.JobID,
        Level: targetJob.Level,
        img: imgSrc
      };
    });

    this.setState({characterData: {
      name: data.Character.Name,
      charaImgSrc: data.Character.Portrait,
      job: nextJob
    }});
  }

  getCharacterData(lodestoneId){ 
    fetch(`https://xivapi.com/character/${lodestoneId}?data=CJ`).then(response => response.json()).then(jsonData => {this.setCharacterData(jsonData);});
  }

  render() {
    return (
      <div>
        <SearchBox lodestoneId={this.state.lodestoneId} handleChange={this.handleChange} getCharacterData={this.getCharacterData} />
        <div>{this.state.characterData.name}</div>
        <div>
          {this.state.characterData.charaImgSrc ? 
          <img className="profileImage"　src={this.state.characterData.charaImgSrc} alt="プロフィール画像" />: 
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
        <img src={job.img} />
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
          <img src={job.img} />
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
        <img src={job.img} />
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
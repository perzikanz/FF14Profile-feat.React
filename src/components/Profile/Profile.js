import React from 'react';
import './Profile.css';
import SearchBox from '../SearchBox';
import JobList from '../JobList';
import { setCharacterImageSrc } from '../../redux/character/characterAction';

import pld from '../../JobIcons/pld.png';
import war from '../../JobIcons/war.png';
import drk from '../../JobIcons/drk.png';
import gnb from '../../JobIcons/gnb.png';
import whm from '../../JobIcons/whm.png';
import sch from '../../JobIcons/sch.png';
import ast from '../../JobIcons/ast.png';
import mnk from '../../JobIcons/mnk.png';
import drg from '../../JobIcons/drg.png';
import nin from '../../JobIcons/nin.png';
import sam from '../../JobIcons/sam.png';
import brd from '../../JobIcons/brd.png';
import mcn from '../../JobIcons/mcn.png';
import dnc from '../../JobIcons/dnc.png';
import blm from '../../JobIcons/blm.png';
import smn from '../../JobIcons/smn.png';
import rdm from '../../JobIcons/rdm.png';
import blu from '../../JobIcons/blu.png';
import crp from '../../JobIcons/crp.png';
import bsm from '../../JobIcons/bsm.png';
import arm from '../../JobIcons/arm.png';
import gsm from '../../JobIcons/gsm.png';
import ltw from '../../JobIcons/ltw.png';
import wvr from '../../JobIcons/wvr.png';
import alc from '../../JobIcons/alc.png';
import cul from '../../JobIcons/cul.png';
import min from '../../JobIcons/min.png';
import btn from '../../JobIcons/btn.png';
import fsh from '../../JobIcons/fsh.png';

import gla from '../../JobIcons/gla.png';
import mrd from '../../JobIcons/mrd.png';
import cnj from '../../JobIcons/cnj.png';
import pgl from '../../JobIcons/pgl.png';
import lnc from '../../JobIcons/lnc.png';
import rog from '../../JobIcons/rog.png';
import arc from '../../JobIcons/arc.png';
import thm from '../../JobIcons/thm.png';
import acn from '../../JobIcons/acn.png';
import { connect } from 'react-redux';

const CLASS_TABLE = [
  { className: 'gla', classID: 1, img: gla },
  { className: 'mrd', classID: 3, img: mrd },
  { className: 'cnj', classID: 6, img: cnj },
  { className: 'pgl', classID: 2, img: pgl },
  { className: 'lnc', classID: 4, img: lnc },
  { className: 'rog', classID: 29, img: rog },
  { className: 'arc', classID: 5, img: arc },
  { className: 'thm', classID: 7, img: thm },
  { className: 'acn', classID: 26, img: acn },
];

const JOB_TABLE = [
  { jobName: 'pld', JobID: 19, img: pld },
  { jobName: 'war', JobID: 21, img: war },
  { jobName: 'drk', JobID: 32, img: drk },
  { jobName: 'gnb', JobID: 37, img: gnb },
  { jobName: 'whm', JobID: 24, img: whm },
  { jobName: 'sch', JobID: 28, img: sch },
  { jobName: 'ast', JobID: 33, img: ast },
  { jobName: 'mnk', JobID: 20, img: mnk },
  { jobName: 'drg', JobID: 22, img: drg },
  { jobName: 'nin', JobID: 30, img: nin },
  { jobName: 'sam', JobID: 34, img: sam },
  { jobName: 'brd', JobID: 23, img: brd },
  { jobName: 'mcn', JobID: 31, img: mcn },
  { jobName: 'dnc', JobID: 38, img: dnc },
  { jobName: 'blm', JobID: 25, img: blm },
  { jobName: 'smn', JobID: 27, img: smn },
  { jobName: 'rdm', JobID: 35, img: rdm },
  { jobName: 'blu', JobID: 36, img: blu },
  { jobName: 'crp', JobID: 8, img: crp },
  { jobName: 'bsm', JobID: 9, img: bsm },
  { jobName: 'arm', JobID: 10, img: arm },
  { jobName: 'gsm', JobID: 11, img: gsm },
  { jobName: 'ltw', JobID: 12, img: ltw },
  { jobName: 'wvr', JobID: 13, img: wvr },
  { jobName: 'alc', JobID: 14, img: alc },
  { jobName: 'cul', JobID: 15, img: cul },
  { jobName: 'min', JobID: 16, img: min },
  { jobName: 'btn', JobID: 17, img: btn },
  { jobName: 'fsh', JobID: 18, img: fsh },
];

export class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      lodestoneId: '22657106', // 22728375
      characterData: {
        name: 'キャラクター名',
        job: [
          { jobName: 'pld', JobID: 19, Level: '-', img: pld },
          { jobName: 'war', JobID: 21, Level: '-', img: war },
          { jobName: 'drk', JobID: 32, Level: '-', img: drk },
          { jobName: 'gnb', JobID: 37, Level: '-', img: gnb },
          { jobName: 'whm', JobID: 24, Level: '-', img: whm },
          { jobName: 'sch', JobID: 28, Level: '-', img: sch },
          { jobName: 'ast', JobID: 33, Level: '-', img: ast },
          { jobName: 'mnk', JobID: 20, Level: '-', img: mnk },
          { jobName: 'drg', JobID: 22, Level: '-', img: drg },
          { jobName: 'nin', JobID: 30, Level: '-', img: nin },
          { jobName: 'sam', JobID: 34, Level: '-', img: sam },
          { jobName: 'brd', JobID: 23, Level: '-', img: brd },
          { jobName: 'mcn', JobID: 31, Level: '-', img: mcn },
          { jobName: 'dnc', JobID: 38, Level: '-', img: dnc },
          { jobName: 'blm', JobID: 25, Level: '-', img: blm },
          { jobName: 'smn', JobID: 27, Level: '-', img: smn },
          { jobName: 'rdm', JobID: 35, Level: '-', img: rdm },
          { jobName: 'blu', JobID: 36, Level: '-', img: blu },
          { jobName: 'crp', JobID: 8, Level: '-', img: crp },
          { jobName: 'bsm', JobID: 9, Level: '-', img: bsm },
          { jobName: 'arm', JobID: 10, Level: '-', img: arm },
          { jobName: 'gsm', JobID: 11, Level: '-', img: gsm },
          { jobName: 'ltw', JobID: 12, Level: '-', img: ltw },
          { jobName: 'wvr', JobID: 13, Level: '-', img: wvr },
          { jobName: 'alc', JobID: 14, Level: '-', img: alc },
          { jobName: 'cul', JobID: 15, Level: '-', img: cul },
          { jobName: 'min', JobID: 16, Level: '-', img: min },
          { jobName: 'btn', JobID: 17, Level: '-', img: btn },
          { jobName: 'fsh', JobID: 18, Level: '-', img: fsh },
        ],
      },
      isReloading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.setCharacterData = this.setCharacterData.bind(this);
    this.getCharacterData = this.getCharacterData.bind(this);
    this.startReloading = this.startReloading.bind(this);
  }

  handleChange(event) {
    this.setState({ lodestoneId: event.target.value });
  }

  setCharacterData(data) {
    const ClassJobs = data.Character.ClassJobs;
    const currentJobs = this.state.characterData.job;

    // Levelだけを更新した新しいJobデータ
    let nextJob = currentJobs.map((currentJob) => {
      const targetJobID = currentJob.JobID; // 目的のジョブのJobID
      // 取ってきたデータの中から、目的のjobのデータだけを取り出す
      const targetJob = ClassJobs.find((fetchedJob) => {
        return fetchedJob.JobID === targetJobID;
      });
      const unID = targetJob.UnlockedState.ID;
      let imgSrc;
      if (unID !== null && (unID < 8 || unID === 29 || unID === 26)) {
        const targetClass = CLASS_TABLE.find((classe) => {
          return classe.classID === unID;
        });
        imgSrc = targetClass.img;
      } else if (unID === null) {
        imgSrc = blu;
      } else {
        const targetJob = JOB_TABLE.find((job) => {
          return job.JobID === unID;
        });
        imgSrc = targetJob.img;
      }
      return {
        JobID: currentJob.JobID,
        Level: targetJob.Level,
        img: imgSrc,
      };
    });

    this.setState({
      characterData: {
        name: data.Character.Name,
        job: nextJob,
      },
      isReloading: false,
    });
  }

  getCharacterData(lodestoneId) {
    fetch(`https://xivapi.com/character/${lodestoneId}?data=CJ`)
      .then((response) => response.json())
      .then((jsonData) => {
        this.setCharacterData(jsonData);
        this.props.dispatch(setCharacterImageSrc(jsonData.Character.Portrait));
      });
  }

  startReloading() {
    this.setState({ isReloading: true });
  }

  render() {
    return (
      <div>
        <SearchBox
          lodestoneId={this.state.lodestoneId}
          handleChange={this.handleChange}
          getCharacterData={this.getCharacterData}
          startReloading={this.startReloading}
        />
        {this.state.isReloading ? (
          <div>リロード中...</div>
        ) : (
          <>
            <div>{this.state.characterData.name}</div>
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
              <JobList job={this.state.characterData.job} />
            </div>
          </>
        )}
      </div>
    );
  }
}

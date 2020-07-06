import React from 'react';
import './Profile.css';
import SearchBox from '../SearchBox';
import JobList from '../JobList';
import { setCharacterImageSrc } from '../../redux/character/characterAction';
import { JOB_TABLE } from '../../constant/job';

import gla from '../../JobIcons/gla.png';
import mrd from '../../JobIcons/mrd.png';
import cnj from '../../JobIcons/cnj.png';
import pgl from '../../JobIcons/pgl.png';
import lnc from '../../JobIcons/lnc.png';
import rog from '../../JobIcons/rog.png';
import arc from '../../JobIcons/arc.png';
import thm from '../../JobIcons/thm.png';
import acn from '../../JobIcons/acn.png';

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

export class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      lodestoneId: '22657106', // 22728375
      characterData: {
        name: 'キャラクター名',
        job: [
          { JobID: 19, Level: '-' },
          { JobID: 21, Level: '-' },
          { JobID: 32, Level: '-' },
          { JobID: 37, Level: '-' },
          { JobID: 24, Level: '-' },
          { JobID: 28, Level: '-' },
          { JobID: 33, Level: '-' },
          { JobID: 20, Level: '-' },
          { JobID: 22, Level: '-' },
          { JobID: 30, Level: '-' },
          { JobID: 34, Level: '-' },
          { JobID: 23, Level: '-' },
          { JobID: 31, Level: '-' },
          { JobID: 38, Level: '-' },
          { JobID: 25, Level: '-' },
          { JobID: 27, Level: '-' },
          { JobID: 35, Level: '-' },
          { JobID: 36, Level: '-' },
          { JobID: 8, Level: '-' },
          { JobID: 9, Level: '-' },
          { JobID: 10, Level: '-' },
          { JobID: 11, Level: '-' },
          { JobID: 12, Level: '-' },
          { JobID: 13, Level: '-' },
          { JobID: 14, Level: '-' },
          { JobID: 15, Level: '-' },
          { JobID: 16, Level: '-' },
          { JobID: 17, Level: '-' },
          { JobID: 18, Level: '-' },
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
      const unName = targetJob.UnlockedState.Name;
      let imgSrc;

      if (unName === 'Blue Mage (Limited Job)') {
        imgSrc = JOB_TABLE[36].img;
      } else if (unID < 8 || unID === 29 || unID === 26) {
        const targetClass = CLASS_TABLE.find((classe) => {
          return classe.classID === unID;
        });
        imgSrc = targetClass.img;
      } else {
        const targetJob = JOB_TABLE[unID];
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

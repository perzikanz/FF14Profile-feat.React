import React from 'react';
import { JOB_TABLE, CLASS_TABLE } from '../../constant/job';
import './JobList.css';

const JobList = function JobList(props) {
  const { classJobs } = props;
  let th = [],
    dps = [],
    gc = [];
  if (classJobs.length === 0) {
    JOB_TABLE.map((constantJobData, i) => {
      const result = (
        <li key={constantJobData.id}>
          <img src={constantJobData.img} />
          <div>-</div>
        </li>
      );
      if (i <= 6) {
        th.push(result);
      } else if (i < 18) {
        dps.push(result);
      } else {
        gc.push(result);
      }
    });
  } else {
    let resultData = [];

    JOB_TABLE.map((constantJobData, i) => {
      const targetID = constantJobData.id;
      const targetJob = classJobs.find((classJobs) => {
        return classJobs.JobID == targetID;
      });
      const unID = targetJob.UnlockedState.ID;
      const unName = targetJob.UnlockedState.Name;
      let imgSrc;
      if (unName === 'Blue Mage (Limited Job)') {
        const bluMage = JOB_TABLE.find((job) => {
          return job.jobName == 'blu';
        });
        imgSrc = bluMage.img;
      } else if (unID < 8 || unID === 29 || unID === 26) {
        const classData = CLASS_TABLE.find((classData) => {
          return classData.id == unID;
        });
        imgSrc = classData.img;
      } else {
        const jobData = JOB_TABLE.find((jobData) => {
          return jobData.id == unID;
        });
        imgSrc = jobData.img;
      }
      resultData.push({
        id: targetID,
        img: imgSrc,
        level: targetJob.Level,
      });
    });

    resultData.map((data, i) => {
      const result = (
        <li key={data.id}>
          <img src={data.img} />
          <div>{data.level}</div>
        </li>
      );
      if (i <= 6) {
        th.push(result);
      } else if (i < 18) {
        dps.push(result);
      } else {
        gc.push(result);
      }
    });
  }
  return (
    <div>
      <ul className="job-list">{th}</ul>
      <ul className="job-list">{dps}</ul>
      <ul className="job-list">{gc}</ul>
    </div>
  );
};

export { JobList };

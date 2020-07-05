import React from 'react';
import './JobList.css';

const JobList = function JobList(props) {
  const th = props.job.map((job, i) => {
    if (i <= 6) {
      return (
        <li key={job.JobID}>
          <img src={job.img} />
          <div>{job.Level}</div>
        </li>
      );
    }
  });
  const dps = props.job.map((job, i) => {
    if (i < 18) {
      if (i > 6) {
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
    if (i >= 18) {
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
};

export { JobList };

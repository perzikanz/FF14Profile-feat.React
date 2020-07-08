import { connect } from 'react-redux';
import { JobList } from './JobList';

const mapStateToProps = (state, ownProps) => {
  const { characterState } = state;
  const { classJobs } = characterState;
  return { classJobs };
};

const connectedJobList = connect(mapStateToProps)(JobList);

export default connectedJobList;

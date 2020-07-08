import { connect } from 'react-redux';
import { Profile } from './Profile';

const mapStateToProps = (state, ownProps) => {
  const { characterState } = state;
  const { charaImgSrc, name } = characterState;
  return { charaImgSrc, name };
};

const connectedProfile = connect(mapStateToProps)(Profile);

export default connectedProfile;

import { connect } from 'react-redux';
import { Profile } from './Profile';

const mapStateToProps = (state, ownProps) => {
  const { characterState } = state;
  const { charaImgSrc, name, isLoading } = characterState;
  return { charaImgSrc, name, isLoading };
};

const connectedProfile = connect(mapStateToProps)(Profile);

export default connectedProfile;

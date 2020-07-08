import React from 'react';
import { fetchProfileData } from '../../redux/character/characterAction';

export function Button(props) {
  const { lodestoneId, dispatch } = props;
  return (
    <button
      onClick={() => {
        dispatch(fetchProfileData(lodestoneId));
      }}
    >
      プロフィールを表示
    </button>
  );
}

import * as React from 'react';
import { fetchProfileData } from '../../redux/character/characterAction';
import { Dispatch } from 'redux';

type Props = {
  lodestoneId: string;
  dispatch: Dispatch;
};

export const Button: React.FC<Props> = (props) => {
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
};

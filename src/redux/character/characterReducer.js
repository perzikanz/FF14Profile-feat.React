import {
  FETCH_CHARACTER_REQUEST,
  FETCH_CHARACTER_SUCCESS,
} from './characterAction';

const initialState = {
  name: 'キャラクター名',
  charaImgSrc: '',
  classJobs: [],
};

export default function character(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_CHARACTER_SUCCESS:
      const { data } = action.payload;
      //-- fetchの結果から必要なデータを取り出す
      const name = data.Character.Name;
      const charaImgSrc = data.Character.Portrait;
      const classJobs = data.Character.ClassJobs;
      return {
        ...state,
        name,
        charaImgSrc,
        classJobs,
        isLoading: false,
      };
    default:
      return state;
  }
}

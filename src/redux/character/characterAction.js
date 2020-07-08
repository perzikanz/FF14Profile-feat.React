export const SET_CHARACTER = 'SET_CHARACTER';
export const SET_CHARACTER_IMAGE_SRC = 'SET_CHARACTER_IMAGE_SRC';

export const FETCH_CHARACTER_REQUEST = 'FETCH_CHARACTER_REQUEST';
export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS';

export const setCharacterImageSrc = (imageSrc) => {
  return {
    type: SET_CHARACTER_IMAGE_SRC,
    payload: {
      imageSrc: imageSrc,
    },
  };
};

const fetchCharacterRequest = (data) => {
  return {
    type: FETCH_CHARACTER_REQUEST,
  };
};

const fetchCharacterSuccess = (data) => {
  return {
    type: FETCH_CHARACTER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchProfileData = (lodestoneId) => {
  return async (dispatch, getState) => {
    dispatch(fetchCharacterRequest());
    const res = await fetch(
      `https://xivapi.com/character/${lodestoneId}?data=CJ`
    );
    const resJson = await res.json();
    dispatch(fetchCharacterSuccess(resJson));
  };
};

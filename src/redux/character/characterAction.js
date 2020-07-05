export const SET_CHARACTER = 'SET_CHARACTER';
export const SET_CHARACTER_IMAGE_SRC = 'SET_CHARACTER_IMAGE_SRC';

export const setCharacterImageSrc = (imageSrc) => {
  return {
    type: SET_CHARACTER_IMAGE_SRC,
    payload: {
      imageSrc: imageSrc,
    },
  };
};

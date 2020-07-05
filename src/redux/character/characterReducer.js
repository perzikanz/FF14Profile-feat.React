import { SET_CHARACTER } from './characterAction';

const initialState = {
  name: 'キャラクター名',
  charaImgSrc: '',
  job: {
    pld: {
      level: '-',
    },
    war: {
      level: '-',
    },
    drk: {
      level: '-',
    },
    gnb: {
      level: '-',
    },
    whm: {
      level: '-',
    },
    sch: {
      level: '-',
    },
    ast: {
      level: '-',
    },
    mnk: {
      level: '-',
    },
    drg: {
      level: '-',
    },
    nin: {
      level: '-',
    },
    sam: {
      level: '-',
    },
    brd: {
      level: '-',
    },
    mcn: {
      level: '-',
    },
    dnc: {
      level: '-',
    },
    blm: {
      level: '-',
    },
    smn: {
      level: '-',
    },
    rdm: {
      level: '-',
    },
    blu: {
      level: '-',
    },
    crp: {
      level: '-',
    },
    bsm: {
      level: '-',
    },
    arm: {
      level: '-',
    },
    gsm: {
      level: '-',
    },
    ltw: {
      level: '-',
    },
    wvr: {
      level: '-',
    },
    alc: {
      level: '-',
    },
    cul: {
      level: '-',
    },
    min: {
      level: '-',
    },
    btn: {
      level: '-',
    },
    fsh: {
      level: '-',
    },
  },
};

export default function character(state = initialState, action) {
  switch (action.type) {
    case SET_CHARACTER:
      return action.payload;
    default:
      return state;
  }
}

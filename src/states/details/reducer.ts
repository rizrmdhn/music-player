import {ActionType} from './action';
import {DetailSongAction, DetailSongState} from './types';

const initalState: DetailSongState = null;

const detailSongReducer = (state = initalState, action: DetailSongAction) => {
  switch (action.type) {
    case ActionType.SET_SONG_DETAILS:
      return action.payload.detailSong;
    case ActionType.UNSET_SONG_DETAILS:
      return null;
    default:
      return state;
  }
};

export default detailSongReducer;

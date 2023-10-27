import {AppDispatch} from '..';
import {DetailSong} from '../../types';
import {ISetDetailSong, IUnsetDetailSong} from './types';

enum ActionType {
  SET_SONG_DETAILS = 'SET_SONG_DETAILS',
  UNSET_SONG_DETAILS = 'UNSET_SONG_DETAILS',
}

function setDetailSong(detailSong: DetailSong): ISetDetailSong {
  return {
    type: ActionType.SET_SONG_DETAILS,
    payload: {
      detailSong,
    },
  };
}

function unsetDetailSong(): IUnsetDetailSong {
  return {
    type: ActionType.UNSET_SONG_DETAILS,
  };
}

function asyncSetDetailSong(detailSong: DetailSong): any {
  return (dispatch: AppDispatch) => {
    dispatch(setDetailSong(detailSong));
  };
}

function asyncUnSetDetailSong(): any {
  return (dispatch: AppDispatch) => {
    dispatch(unsetDetailSong());
  };
}

export {ActionType, asyncSetDetailSong, asyncUnSetDetailSong};

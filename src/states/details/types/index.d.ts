import {AnyAction} from '@reduxjs/toolkit';
import {DetailSong} from '../../../types';

export interface ISetDetailSong {
  type: string;
  payload: {
    detailSong: DetailSong;
  };
}

export interface IUnsetDetailSong {
  type: string;
}

export type DetailSongState = null | DetailSong;

export type DetailSongAction = ISetDetailSong | AnyAction;

export type asyncSetDetailSong = (detailSong: DetailSong) => ISetDetailSong;

export type asyncUnsetDetailSong = () => IUnsetDetailSong;

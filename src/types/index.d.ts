import {NavigationProp} from '@react-navigation/native';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Details: undefined;
};

export type RootStackNavigationProp = NavigationProp<RootStackParamList>;

export type DetailSong = {
  key: int;
  albumImgUrl: string;
  songName: string;
  artistName: string;
  albumName: string;
};

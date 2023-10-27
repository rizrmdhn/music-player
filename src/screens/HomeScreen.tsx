import {View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Header from '../components/Header';
import data from '../utils/data.json';
import SongCard from '../components/SongCard';
import {RootStackNavigationProp} from '../types';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {asyncSetDetailSong} from '../states/details/action';

type HomeScreenProps = PropsWithChildren<{
  navigation: RootStackNavigationProp;
}>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const dispatch = useDispatch();

  return (
    <ScrollView className="h-screen">
      <Header navigation={navigation} />
      <View className="mt-5 flex flex-col items-center">
        {data.map((item, index) => (
          <SongCard
            key={index}
            albumImgUrl={item.AlbumImageURL}
            songName={item.TrackName}
            artistName={item['ArtistName(s)']}
            albumName={item.AlbumName}
            onPressAction={() => {
              const songsData = {
                key: index,
                albumImgUrl: item.AlbumImageURL,
                songName: item.TrackName,
                artistName: item['ArtistName(s)'],
                albumName: item.AlbumName,
              };
              dispatch(asyncSetDetailSong(songsData));
              navigation.navigate('Details');
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

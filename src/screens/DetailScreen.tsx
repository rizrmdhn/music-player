import {Text, View, Image} from 'react-native';
import React, {PropsWithChildren, useEffect} from 'react';
import Header from '../components/Header';
import {DetailSong, RootStackNavigationProp} from '../types';
import useSelectState from '../hooks/useSelectState';
import {useDispatch} from 'react-redux';
import {asyncUnSetDetailSong} from '../states/details/action';

type DetailScreenProps = PropsWithChildren<{
  navigation: RootStackNavigationProp;
}>;

const DetailScreen = ({navigation}: DetailScreenProps) => {
  const detailSong = useSelectState('detailSong') as DetailSong;

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(asyncUnSetDetailSong());
    };
  }, []);

  return (
    <View>
      <Header navigation={navigation} needBack />
      <View className="flex flex-col items-center justify-center">
        <Text className="mb-2 mt-5 text-2xl font-bold text-black">
          Now Playing ...
        </Text>
        <View className="mb-5 mt-5">
          <Image
            source={{uri: detailSong?.albumImgUrl}}
            className="h-64 w-64 rounded-lg"
          />
        </View>
        <View className="flex flex-col items-center justify-center">
          <Text className="mb-2 text-base text-black">
            {detailSong?.artistName} - {detailSong?.songName}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;

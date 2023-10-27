import {Image, Pressable, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

type SongCardProps = PropsWithChildren<{
  albumImgUrl: string;
  songName: string;
  artistName: string;
  albumName: string;
  onPressAction: () => void;
}>;

const SongCard = ({
  albumImgUrl,
  songName,
  artistName,
  albumName,
  onPressAction,
}: SongCardProps) => {
  return (
    <>
      <Pressable
        className="mb-2 flex w-64 flex-row items-center justify-start rounded-lg bg-slate-600 pb-2 pl-5 pr-5 pt-2"
        onPress={onPressAction}>
        <View className="mr-5 ms-5">
          <Image source={{uri: albumImgUrl}} className="h-16 w-16 rounded-lg" />
        </View>
        <View className="flex flex-col items-start justify-center ">
          <Text className="mb-2 mt-2 text-white">
            {songName.length > 20
              ? songName.substring(0, 20) + '...'
              : songName}
          </Text>
          <Text className="mb-2 text-white">
            {artistName.length > 20
              ? artistName.substring(0, 20) + '...'
              : artistName}
          </Text>
          <Text className="mb-2 text-white">
            {albumName.length > 20
              ? albumName.substring(0, 20) + '...'
              : albumName}
          </Text>
        </View>
      </Pressable>
    </>
  );
};

export default SongCard;

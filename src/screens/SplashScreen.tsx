import type {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RootStackNavigationProp} from '../types';

type SplashScreenProps = PropsWithChildren<{
  navigation: RootStackNavigationProp;
}>;

const SplashScreen = ({navigation}: SplashScreenProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <View className="flex h-screen items-center justify-center">
      <Text className=" text-black">
        <FontAwesome name="music" size={64} />
      </Text>
      <Text className="mt-5 text-3xl font-bold text-black">Music App</Text>
    </View>
  );
};

export default SplashScreen;

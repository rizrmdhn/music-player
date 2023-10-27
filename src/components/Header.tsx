import type {PropsWithChildren} from 'react';
import {RootStackNavigationProp} from '../types';
import {Pressable, Text, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type HeaderProps = PropsWithChildren<{
  navigation: RootStackNavigationProp;
  needBack?: boolean;
  headerTitle?: string;
}>;

export default function Header({
  navigation,
  needBack,
  headerTitle,
}: HeaderProps) {
  return (
    <View className="flex h-header flex-row items-center justify-start bg-black">
      {needBack && (
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Text className="ml-4 text-white">
            <FontAwesome name="chevron-left" size={25} />
          </Text>
        </Pressable>
      )}
      <Text className="w-full text-center text-2xl text-white">
        {headerTitle ? headerTitle : 'Music App'}
      </Text>
    </View>
  );
}

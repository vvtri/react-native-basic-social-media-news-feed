import React from 'react';
import { Image, Text, View } from 'react-native';
import defaultProfileImg from '../../assets/images/default-profile.png';
import { userStoryStyle } from './style';

type Props = {
  id: number;
  userName: string;
};

const UserStory = ({ id, userName }: Props) => {
  return (
    <View style={userStoryStyle.container}>
      <View style={userStoryStyle.imageWrapper}>
        <Image source={defaultProfileImg} />
      </View>

      <Text style={userStoryStyle.text}>{userName}</Text>
    </View>
  );
};

export default UserStory;

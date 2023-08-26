import React from 'react';
import { Image, Text, View } from 'react-native';
import profileImg from '../../assets/images/default-profile.png';
import postImg from '../../assets/images/default-post.png';
import { IPost } from '../../data/post';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import { postStyle } from './style';

type Props = { postData: IPost };

export const Post = ({ postData }: Props) => {
  const { address, bookmark, comment, id, like, name } = postData;
  return (
    <View>
      <View style={postStyle.postHeaderContainer}>
        <View style={postStyle.postHeaderInfoWrapper}>
          <View style={postStyle.postHeaderImageWrapper}>
            <Image source={profileImg} />
          </View>

          <View style={postStyle.postHeaderTextWrapper}>
            <Text style={postStyle.postHeaderUserName}>{name}</Text>
            <Text style={postStyle.postHeaderUserAddress}>{address}</Text>
          </View>
        </View>

        <View style={{ marginRight: 10 }}>
          <FontAwesomeIcon icon={faEllipsisH} color="#79869F" size={20} />
        </View>
      </View>

      <View style={postStyle.postContentImageWrapper}>
        <Image source={postImg} resizeMode="cover" />
      </View>

      <View style={postStyle.postStatsContainer}>
        <View style={postStyle.postStatItemWrapper}>
          <FontAwesomeIcon icon={faHeart} size={20} color="#79869F" />
          <Text style={postStyle.postStatItemText}>{like}</Text>
        </View>

        <View style={postStyle.postStatItemWrapper}>
          <FontAwesomeIcon icon={faComment} size={20} color="#79869F" />
          <Text style={postStyle.postStatItemText}>{comment}</Text>
        </View>

        <View style={postStyle.postStatItemWrapper}>
          <FontAwesomeIcon icon={faBookmark} size={20} color="#79869F" />
          <Text style={postStyle.postStatItemText}>{bookmark}</Text>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#eaeaea',
          marginVertical: 20,
        }}></View>
    </View>
  );
};

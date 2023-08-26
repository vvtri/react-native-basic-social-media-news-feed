import { StyleSheet } from 'react-native';
import {
  fontSizeScale,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scaling';

export const userStoryStyle = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginRight: horizontalScale(20),
  },
  imageWrapper: {
    borderColor: '#F35BAC',
    borderWidth: horizontalScale(1),
    padding: horizontalScale(3),
    borderRadius: 500,
  },
  text: {
    marginTop: verticalScale(8),
    color: '#022150',
    fontFamily: 'Inter',
    fontSize: fontSizeScale(14),
    fontWeight: '500',
  },
});

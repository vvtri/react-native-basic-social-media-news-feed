import { StyleSheet } from 'react-native';
import {
  fontSizeScale,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scaling';

export const postStyle = StyleSheet.create({
  postHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postHeaderInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postHeaderImageWrapper: {
    padding: horizontalScale(3),
    borderColor: '#F35BAC',
    borderWidth: horizontalScale(1),
    borderRadius: 500,
  },
  postHeaderTextWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
  },
  postHeaderUserName: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: fontSizeScale(16),
    lineHeight: fontSizeScale(19),
    color: '#000',
  },
  postHeaderUserAddress: {
    marginTop: verticalScale(5),
    fontFamily: 'Inter',
    fontSize: fontSizeScale(12),
    lineHeight: fontSizeScale(14.5),
    color: '#79869F',
  },
  postContentImageWrapper: {
    marginTop: verticalScale(16),
    overflow: 'hidden',
    borderRadius: 15,
  },
  postStatsContainer: {
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(3),
    flexDirection: 'row',
    alignItems: 'center',
  },
  postStatItemWrapper: {
    marginRight: horizontalScale(30),
    flexDirection: 'row',
    alignItems: 'center',
  },
  postStatItemText: {
    fontFamily: 'Inter',
    fontSize: fontSizeScale(14),
    fontWeight: '500',
    lineHeight: fontSizeScale(17),
    color: '#79869F',
    marginLeft: horizontalScale(3),
  },
});

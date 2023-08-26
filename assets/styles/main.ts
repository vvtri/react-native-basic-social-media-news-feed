import { StyleSheet } from 'react-native';
import { fontSizeScale, horizontalScale, verticalScale } from './scaling';

export const mainStyle = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: horizontalScale(26),
    marginRight: horizontalScale(17),
    marginTop: verticalScale(20),
  },
  messageIcon: {
    padding: horizontalScale(12),
    borderRadius: 500,
    backgroundColor: '#F9FAFB',
  },
  messageNumberContainer: {
    position: 'absolute',
    backgroundColor: '#F35BAC',
    width: horizontalScale(10),
    height: horizontalScale(10),
    borderRadius: 100,
    right: 0,
    top: 0,
    transform: [{ translateX: 5 }, { translateY: -3 }],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageNumber: {
    fontFamily: 'Inter',
    fontSize: fontSizeScale(6),
    fontWeight: '600',
    color: '#fff',
    lineHeight: fontSizeScale(7),
  },
  userStoryContainer: {
    marginTop: verticalScale(12),
    marginHorizontal: horizontalScale(28),
    flex: 1,
  },
  postContainer: {
    marginTop: verticalScale(30),
    marginHorizontal: horizontalScale(24),
  },
});

import { StyleSheet } from 'react-native';
import { fontSizeScale } from '../../assets/styles/scaling';

export const titleStyle = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: 'Inter',
    fontSize: fontSizeScale(24),
    fontWeight: '600',
    lineHeight: fontSizeScale(29),
  },
});

import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Dimensions,
} from 'react-native';
import { hasNotch } from 'react-native-device-info';

const { fontScale, height, width, scale } = Dimensions.get('window');

const isSmall = width <= 375 && hasNotch();

const guidelineBaseWidth = () => {
  if (isSmall) return 330;

  return 350;
};

const guidelineBaseHeight = () => {
  if (isSmall) return 550;
  else if (width > 410) return 620;
  else return 680;
};

const horizontalScale = (size: number) => size * (width / guidelineBaseWidth());
const verticalScale = (size: number) => size * (height / guidelineBaseHeight());
const fontSizeScale = (fontSize: number) =>
  Math.round(fontSize * (width / guidelineBaseWidth()));

export { horizontalScale, verticalScale, fontSizeScale };

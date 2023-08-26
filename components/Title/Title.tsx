import React from 'react';
import { Text } from 'react-native';
import { titleStyle } from './style';

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return <Text style={titleStyle.title}>{title}</Text>;
};

export default Title;

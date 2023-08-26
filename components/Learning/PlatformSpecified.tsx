import React, { useState } from 'react';
import { Platform, Switch } from 'react-native';

type Props = {};

const PlatformSpecified = (props: Props) => {
  const [value, setValue] = useState(false);

  let trackColor: { false: string; true: string } | undefined = undefined;

  switch (Platform.OS) {
    case 'android':
      trackColor = { false: 'plum', true: 'lightgreen' };
      break;
    default:
      break;
  }

  return (
    <Switch
      value={value}
      onValueChange={value => setValue(value)}
      style={[Platform.OS === 'android' && { transform: [{ scale: 1.3 }] }]}
      trackColor={trackColor}
    />
  );
};

export default PlatformSpecified;

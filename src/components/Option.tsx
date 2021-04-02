import React, {FC} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import {COLOR} from '../styles/theme';

export const Option: FC<{
  active: boolean;
  onPress: (event: GestureResponderEvent) => void;
}> = ({active, onPress, children}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.6}
    style={[
      styles.button,
      {borderColor: active ? COLOR.black : COLOR.disabled},
    ]}>
    <Text
      style={{
        fontSize: 13,
        color: active ? COLOR.black : COLOR.disabled,
      }}>
      {children}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    marginRight: 8,
  },
});

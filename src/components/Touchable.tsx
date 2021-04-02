import React, {FC} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';

export const Touchable: FC<{
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
}> = ({onPress = event => {}, style, children}) => (
  <TouchableOpacity
    activeOpacity={0.6}
    onPress={onPress}
    style={[styles.button, style]}>
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

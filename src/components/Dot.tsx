import React, {FC} from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import {COLOR} from '../styles/theme';

export const Dot: FC<{
  color: keyof typeof COLOR;
  active: boolean;
  onPress: (event: GestureResponderEvent) => void;
}> = ({color, onPress, active, children}) => (
  <TouchableOpacity
    activeOpacity={0.6}
    onPress={onPress}
    style={[styles.button, {borderColor: color, padding: active ? 2 : 0}]}>
    <View
      style={[
        styles.dot,
        {
          backgroundColor: color,
        },
      ]}>
      {children}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    height: 24,
    width: 24,
    borderWidth: 2,
    padding: 2,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  dot: {
    height: '100%',
    width: '100%',
    borderRadius: 24,
  },
});

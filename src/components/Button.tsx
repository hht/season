import React, {FC} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {COLOR} from '../styles/theme';

export const Button: FC<{
  type: 'primary' | 'ghost' | 'flat';
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  width?: number;
}> = ({type, onPress, width = '100%', style, children}) => (
  <TouchableOpacity
    activeOpacity={0.6}
    onPress={onPress}
    style={[
      styles.button,
      {
        width,
        borderColor: type === 'flat' ? 'transparent' : COLOR.black,
        backgroundColor:
          type === 'primary'
            ? COLOR.black
            : type === 'flat'
            ? 'transparent'
            : COLOR.white,
      },
      style,
    ]}>
    <Text
      style={{
        fontSize: 14,
        fontWeight: '600',
        color: type === 'primary' ? COLOR.white : COLOR.black,
      }}>
      {children}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
  },
});

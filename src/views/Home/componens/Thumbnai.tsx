import React, {FC} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Touchable} from '../../../components';
import {COLOR} from '../../../styles/theme';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/core';
import {DEVICE_WIDTH} from '../../../constants';

const ITEM_WIDTH = (DEVICE_WIDTH - 60) / 2;

const Thumbnai: FC<{item: Goods}> = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => navigation.navigate('detail', {item})}>
      <View style={styles.cover}></View>
      <View style={styles.actions}>
        <View style={{paddingTop: 10}}>
          <Text style={{fontSize: 14}}>{item.name}</Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              lineHeight: 23,
            }}>{`$${item.price.toFixed(2)}`}</Text>
        </View>
        <Touchable style={styles.more}>
          <Feather name="more-vertical" size={20} color={COLOR.grey} />
        </Touchable>
      </View>
    </TouchableOpacity>
  );
};

export default Thumbnai;

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    marginBottom: 25,
  },
  cover: {
    width: ITEM_WIDTH,
    height: 200,
    borderRadius: 4,
    backgroundColor: COLOR.sandyBeach,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  more: {
    transform: [{translateX: 18}],
  },
});

import {RouteProp, useRoute} from '@react-navigation/core';
import React, {FC, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button, Dot, Option} from '../../components';
import {DEVICE_WIDTH} from '../../constants';
import {COLOR} from '../../styles/theme';

const COLORS = ['onahau', 'pinkLace', 'sandyBeach'];

const SIZE = ['S', 'M', 'L', 'XL'];

const Detail: FC = () => {
  const {item} = useRoute<RouteProp<NavigationParams, 'detail'>>().params;
  const [current, toggleCurrent] = useState('onahau');
  const [size, toggleSize] = useState('S');
  const {bottom} = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <View style={styles.cart}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18}}>{item.name}</Text>
          <View style={{flexDirection: 'row'}}>
            {COLORS.map(it => (
              <Dot
                active={it === current}
                key={it}
                onPress={() => toggleCurrent(it)}
                // @ts-ignore
                color={COLOR[it]}
              />
            ))}
          </View>
        </View>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            marginVertical: 10,
          }}>{`$${item.price.toFixed(2)}`}</Text>
        <Text
          style={{
            fontSize: 13,
            opacity: 0.5,
            lineHeight: 18,
            marginVertical: 15,
          }}>
          Fitted top made from a polyamide blend. Features wide straps and chest
          reinforcement.
        </Text>
        <Text style={{fontSize: 13}}>Select Size</Text>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          {SIZE.map(it => (
            <Option active={it === size} onPress={() => toggleSize(it)}>
              {it}
            </Option>
          ))}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: bottom,
            marginTop: 20,
          }}>
          <Button
            type="ghost"
            style={{flex: 1, marginRight: 20}}
            onPress={() => {}}>
            Add to Cart
          </Button>
          <Button type="primary" style={{flex: 1}} onPress={() => {}}>
            Buy Now
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.sandyBeach,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  cart: {
    padding: 25,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: 'white',
    width: DEVICE_WIDTH - 50,
  },
});

import React from 'react';
import {FlatList} from 'react-native';
import Thumbnai from './Thumbnai';

const GOOD_LIST: Goods[] = [
  {
    id: 1,
    name: 'Fit and Flare',
    price: 120.99,
    discount: 0.9,
    manufacturer: 'Chanel',
    category: 'Dress',
    code: '190X8934',
  },
  {
    id: 2,
    name: 'Empire Dress',
    price: 136,
    manufacturer: 'Chanel',
    category: 'Victoria',
    code: '190X8934',
  },
  {
    id: 3,
    name: 'Summer Vibes',
    price: 199.99,
    manufacturer: 'Zara',
    category: 'Dress',
    code: '190X8934',
  },
  {
    id: 4,
    name: 'Flora Fun',
    price: 150.99,
    discount: 0.8,
    manufacturer: 'Harbour',
    category: 'Dress',
    code: '190X8934',
  },
];

const keyExtractor = (item: Goods) => `${item.id}`;

const renderItem = ({item}: {item: Goods}) => <Thumbnai item={item} />;

const GoodsList = () => {
  return (
    <FlatList
      data={GOOD_LIST}
      numColumns={2}
      style={{marginTop: 20}}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default GoodsList;

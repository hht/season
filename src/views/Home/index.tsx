import React, {FC, useState} from 'react';
import {View, ScrollView, StyleSheet, TextInput} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Button, Touchable} from '../../components';
import {COLOR} from '../../styles/theme';
import GoodsList from './componens/GoodsList';

const CATEGORIES = ['Dress', 'Pants', 'Blazers', 'Jackets'];
const Home: FC = () => {
  const [current, toggleCurrent] = useState('Dress');
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <View style={[styles.wrapper, {flex: 1, marginRight: 10}]}>
          <TextInput style={styles.input}></TextInput>
          <Touchable>
            <SimpleLineIcons name="arrow-down" size={16} color={COLOR.black} />
          </Touchable>
        </View>
        <Touchable style={[styles.wrapper, {width: 48}]}>
          <Octicons name="settings" size={24} color={COLOR.black} />
        </Touchable>
      </View>
      <View style={styles.group}>
        {CATEGORIES.map(it => (
          <Button
            width={80}
            type={current === it ? 'primary' : 'flat'}
            key={it}
            onPress={() => toggleCurrent(it)}>
            {it}
          </Button>
        ))}
      </View>
      <GoodsList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
  },
  header: {
    flexDirection: 'row',
  },
  wrapper: {
    backgroundColor: 'white',
    height: 48,
    shadowOffset: {width: 2, height: 20},
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    paddingHorizontal: 12,
    borderRadius: 4,
    borderColor: '#F5F5F5',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 22,
    textAlignVertical: 'center',
    marginRight: 8,
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
});

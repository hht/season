import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../views/Home';
import Detail from '../views/Detail';
import {Touchable} from '../components';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {COLOR} from '../styles/theme';
import {Image, Text, View} from 'react-native';
const Stack = createStackNavigator<NavigationParams>();

const {Navigator, Screen} = Stack;

export default () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="home"
          component={Home}
          options={{
            headerLeft: () => (
              <Touchable style={{marginLeft: 10}}>
                <Feather name="menu" size={20} color={COLOR.black} />
              </Touchable>
            ),
            headerTitle: () => (
              <Image
                source={require('../assets/images/title.jpg')}
                style={{width: 72, height: 24}}
              />
            ),
            headerRight: () => (
              <View style={{flexDirection: 'row', paddingRight: 10}}>
                <Touchable>
                  <Feather name="search" size={20} color={COLOR.black} />
                </Touchable>
                <Touchable>
                  <Ionicons
                    name="notifications-outline"
                    size={20}
                    color={COLOR.black}
                  />
                </Touchable>
                <Touchable>
                  <SimpleLineIcons
                    name="handbag"
                    size={18}
                    color={COLOR.black}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      borderWidth: 2,
                      borderColor: 'white',
                      backgroundColor: 'red',
                      height: 10,
                      width: 10,
                      borderRadius: 5,
                    }}></View>
                </Touchable>
              </View>
            ),
          }}
        />
        <Screen
          name="detail"
          component={Detail}
          options={({route, navigation}) => {
            const {item} = route?.params;
            return {
              headerLeft: () => (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Touchable
                    style={{marginLeft: 10}}
                    onPress={navigation.goBack}>
                    <Feather name="arrow-left" size={20} color={COLOR.black} />
                  </Touchable>
                  <Text style={{fontSize: 17}}>{item.name}</Text>
                </View>
              ),
              headerTitle: () => null,
              headerRight: () => (
                <View style={{flexDirection: 'row', paddingRight: 10}}>
                  <Touchable>
                    <Feather name="search" size={20} color={COLOR.black} />
                  </Touchable>
                  <Touchable>
                    <SimpleLineIcons
                      name="handbag"
                      size={18}
                      color={COLOR.black}
                    />
                    <View
                      style={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        borderWidth: 2,
                        borderColor: 'white',
                        backgroundColor: 'red',
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                      }}></View>
                  </Touchable>
                </View>
              ),
            };
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

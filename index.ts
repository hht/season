import 'react-native-gesture-handler';
import {AppRegistry, Platform, UIManager} from 'react-native';
import App from './src/routes';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
AppRegistry.registerComponent('season', () => App);

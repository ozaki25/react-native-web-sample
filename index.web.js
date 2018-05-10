import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('cross_platform_sample', () => App);

AppRegistry.runApplication('cross_platform_sample', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});

//import { AppRegistry } from 'react-native';
//import Main from './Main';

//AppRegistry.registerComponent('alarm', () => Main);

import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'alarm.FirstTabScreen', // this is a registered name for a screen
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'alarm.SecondTabScreen',
      title: 'Screen Two'
    }
  ]
});

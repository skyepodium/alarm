import { Navigation } from 'react-native-navigation';

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';

export default () => {
  Navigation.registerComponent('Screen1', () => Screen1);
  Navigation.registerComponent('Screen2', () => Screen2);
  Navigation.registerComponent('Screen3', () => Screen3);
  Navigation.registerComponent('Screen4', () => Screen4);

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One',
        screen: 'Screen1',
        title: 'Screen One',
      },
      {
        label: 'One',
        screen: 'Screen2',
        title: 'Screen One',
      },
      {
        label: 'One',
        screen: 'Screen3',
        title: 'Screen One',
      },
      {
        label: 'One',
        screen: 'Screen4',
        title: 'Screen One',
      },

    ],
  })

};

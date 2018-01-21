import { StackNavigator } from 'react-navigation';

import HomeViewContainer from '../../containers/HomeViewContainer';
import DetailViewContainer from '../../containers/DetailViewContainer';
import EditViewContainer from '../../containers/EditViewContainer';

const styleHeader = {
  backgroundColor: 'transparent',
  position: 'absolute',
  height: 50,
  top: 0,
  left: 0,
  right: 0,
  borderBottomWidth: 0,
}

const Navigator = StackNavigator(
  {
    HomeView: {
      screen: HomeViewContainer,
      headerTitle: '',
      title: 'Title',
      headerStyle: styleHeader,
      headerTintColor: '#ffffff',
    },
    DetailView: {
      screen: DetailViewContainer,
      navigationOptions: {
        headerTitle: 'Places',
        headerStyle: styleHeader,
        headerTintColor: '#ffffff',
      },
    },
    EditView: {screen: EditViewContainer,},
  },
  {
  // headerMode: 'screen',
  // mode: 'card',
  // cardStyle: { backgroundColor: 'transparent' },
  // tintColor: '#ffffff',
  // opacity:0.99,
  }
);

export default Navigator

import { createStackNavigator, createAppContainer } from 'react-navigation';

import Menu_1 from '../Screens/Menu_1';
import Menu_2 from '../Screens/Menu_2';
import Menu_3 from '../Screens/Menu_3';
import HomeScreen from '../Screens/HomeScreen';
import Ecran_Tactile from '../Screens/Ecran_Tactile';


const MainNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  Menu_1: { screen: Menu_1 },
  Menu_2: { screen: Menu_2 },
  Menu_3: { screen: Menu_3 },
  Ecran_Tactile: { screen: Ecran_Tactile }
});

const AppNav = createAppContainer(MainNavigator)

export default AppNav
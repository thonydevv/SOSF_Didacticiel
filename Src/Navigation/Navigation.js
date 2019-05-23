import { createStackNavigator, createAppContainer } from 'react-navigation';

import Menu_1 from '../Screens/Menu_1';
import Menu_2 from '../Screens/Menu_2';
import Menu_3 from '../Screens/Menu_3';
import HomeScreen from '../Screens/HomeScreen';
import Ecran1_Tactile from '../Screens/Ecran1_Tactile';
import Ecran2_Tactile from '../Screens/Ecran2_Tactile';
import Ecran3_Tactile from '../Screens/Ecran3_Tactile';
import Type4_Toucher from '../Screens/Type4_Toucher';
import Type5_Toucher from '../Screens/Type5_Toucher';
import Type6_Toucher from '../Screens/Type6_Toucher';
import Type6a_Toucher from '../Screens/Type6a_Toucher';
import Type6a1_Toucher from '../Screens/Type6a1_Toucher';
import Type6a2_Toucher from '../Screens/Type6a2_Toucher';
import Type6b_Toucher from '../Screens/Type6b_Toucher';
import Type6b1_Toucher from '../Screens/Type6b1_Toucher';
import Type_Toucher_Bravo from '../Screens/Type_Toucher_Bravo';
import Type7_Toucher from '../Screens/Type7_Toucher';
import Type8_Toucher  from '../Screens/Type8_Toucher';
import Type8a_Toucher from '../Screens/Type8a_Toucher';
import Type8a1_Toucher from '../Screens/Type8a1_Toucher';
import Type8a2_Toucher from '../Screens/Type8a2_Toucher';
import Type8b_Toucher from '../Screens/Type8b_Toucher';
import Type8b1_Toucher from '../Screens/Type8b1_Toucher';
import Le_Glisser from '../Screens/Le_Glisser';
import Le_Glisser1 from '../Screens/Le_Glisser1';
import Le_Glisser2 from '../Screens/Le_Glisser2';
import Le_Glisser3 from '../Screens/Le_Glisser3';
import Le_Glisser4 from '../Screens/Le_Glisser4';
import Le_Glisser5 from '../Screens/Le_Glisser5';
import Le_Zoom from '../Screens/Le_Zoom';
import Le_Zoom1 from '../Screens/Le_Zoom1';
import Le_Zoom2 from '../Screens/Le_Zoom2';
import Le_Zoom3 from '../Screens/Le_Zoom3';
import Vocabulaire_Ecran_Accueil from '../Screens/Vocabulaire_Ecran_Accueil';
import Vocabulaire_Ecran_Accueil2 from '../Screens/Vocabulaire_Ecran_Accueil2';
import Vocabulaire_Applications from '../Screens/Vocabulaire_Applications';
import Vocabulaire_Icones from '../Screens/Vocabulaire_Icones';
import Vocabulaire_Icones2 from '../Screens/Vocabulaire_Icones2';
import Vocabulaire_Menu from '../Screens/Vocabulaire_Menu';
import Vocabulaire_Menu2 from '../Screens/Vocabulaire_Menu2';
import Vocabulaire_Internet from '../Screens/Vocabulaire_Internet';
import Vocabulaire_Internet2 from '../Screens/Vocabulaire_Internet2';
import Vocabulaire_Internet3 from '../Screens/Vocabulaire_Internet3';
import Vocabulaire_Train from '../Screens/Vocabulaire_Train';
import Vocabulaire_Train2 from '../Screens/Vocabulaire_Train2';
import Vocabulaire_Bravo from '../Screens/Vocabulaire_Bravo';
import Internet from '../Screens/Internet';
import Internet2 from '../Screens/Internet2';

const MainNavigator = createStackNavigator({

  HomeScreen: { screen: HomeScreen, navigationOptions: {header: null}},
  Menu_1: { screen: Menu_1, navigationOptions: {header: null}},
  Menu_2: { screen: Menu_2, navigationOptions: {header: null}},
  Menu_3: { screen: Menu_3, navigationOptions: {header: null}},
  Ecran1_Tactile: { screen: Ecran1_Tactile, navigationOptions: {header: null}},
  Ecran2_Tactile: { screen: Ecran2_Tactile, navigationOptions: {header: null}},
  Ecran3_Tactile: { screen: Ecran3_Tactile, navigationOptions: {header: null}},
  Type4_Toucher: { screen: Type4_Toucher, navigationOptions: {header: null}},
  Type5_Toucher: { screen: Type5_Toucher, navigationOptions: {header: null}},
  Type6_Toucher: { screen: Type6_Toucher, navigationOptions: {header: null}},
  Type6a_Toucher: { screen: Type6a_Toucher, navigationOptions: {header: null}},
  Type6a1_Toucher: { screen: Type6a1_Toucher, navigationOptions: {header: null}},
  Type6a2_Toucher: { screen: Type6a2_Toucher, navigationOptions: {header: null}},
  Type6b_Toucher: { screen: Type6b_Toucher, navigationOptions: {header: null}},
  Type6b1_Toucher: { screen: Type6b1_Toucher, navigationOptions: {header: null}},
  Type_Toucher_Bravo: { screen: Type_Toucher_Bravo, navigationOptions: {header: null}},
  Type7_Toucher: { screen: Type7_Toucher, navigationOptions: {header: null}},
  Type8_Toucher: { screen: Type8_Toucher, navigationOptions: {header: null}},
  Type8a_Toucher: { screen: Type8a_Toucher, navigationOptions: {header: null}},
  Type8a1_Toucher: { screen: Type8a1_Toucher, navigationOptions: {header: null}},
  Type8a2_Toucher: { screen: Type8a2_Toucher, navigationOptions: {header: null}},
  Type8b_Toucher: { screen: Type8b_Toucher, navigationOptions: {header: null}},
  Type8b1_Toucher: { screen: Type8b1_Toucher, navigationOptions: {header: null}},
  Le_Glisser: { screen: Le_Glisser, navigationOptions: {header: null}},
  Le_Glisser1: { screen: Le_Glisser1, navigationOptions: {header: null}},
  Le_Glisser2: { screen: Le_Glisser2, navigationOptions: {header: null}},
  Le_Glisser3: { screen: Le_Glisser3, navigationOptions: {header: null}},
  Le_Glisser4: { screen: Le_Glisser4, navigationOptions: {header: null}},
  Le_Glisser5: { screen: Le_Glisser5, navigationOptions: {header: null}},
  Le_Zoom: { screen: Le_Zoom, navigationOptions: {header: null}},
  Le_Zoom1: { screen: Le_Zoom1, navigationOptions: {header: null}},
  Le_Zoom2: { screen: Le_Zoom2, navigationOptions: {header: null}},
  Le_Zoom3: { screen: Le_Zoom3, navigationOptions: {header: null}},
  Vocabulaire_Ecran_Accueil: { screen: Vocabulaire_Ecran_Accueil, navigationOptions: {header: null}},
  Vocabulaire_Ecran_Accueil2: { screen: Vocabulaire_Ecran_Accueil2, navigationOptions: {header: null}},
  Vocabulaire_Applications: { screen: Vocabulaire_Applications, navigationOptions: {header: null}},
  Vocabulaire_Icones: { screen: Vocabulaire_Icones, navigationOptions: {header: null}},
  Vocabulaire_Icones2: { screen: Vocabulaire_Icones2, navigationOptions: {header: null}},
  Vocabulaire_Menu: { screen: Vocabulaire_Menu, navigationOptions: {header: null}},
  Vocabulaire_Menu2: { screen: Vocabulaire_Menu2, navigationOptions: {header: null}},
  Vocabulaire_Internet: { screen: Vocabulaire_Internet, navigationOptions: {header: null}},
  Vocabulaire_Internet2: { screen: Vocabulaire_Internet2, navigationOptions: {header: null}},
  Vocabulaire_Internet3: { screen: Vocabulaire_Internet3, navigationOptions: {header: null}},
  Vocabulaire_Train: { screen: Vocabulaire_Train, navigationOptions: {header: null}},
  Vocabulaire_Train2: { screen: Vocabulaire_Train2, navigationOptions: {header: null}},
  Vocabulaire_Bravo: { screen: Vocabulaire_Bravo, navigationOptions: {header: null}},
  Internet: { screen: Internet, navigationOptions: {header: null}},
  Internet2: { screen: Internet2, navigationOptions: {header: null}}

});

const AppNav = createAppContainer(MainNavigator)

export default AppNav
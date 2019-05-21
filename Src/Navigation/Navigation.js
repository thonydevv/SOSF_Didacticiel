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

const MainNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  Menu_1: { screen: Menu_1 },
  Menu_2: { screen: Menu_2 },
  Menu_3: { screen: Menu_3 },
  Ecran1_Tactile: { screen: Ecran1_Tactile },
  Ecran2_Tactile: { screen: Ecran2_Tactile },
  Ecran3_Tactile: { screen: Ecran3_Tactile },
  Type4_Toucher: { screen: Type4_Toucher },
  Type5_Toucher: { screen: Type5_Toucher },
  Type6_Toucher: { screen: Type6_Toucher },
  Type6a_Toucher: { screen: Type6a_Toucher },
  Type6a1_Toucher: { screen: Type6a1_Toucher },
  Type6a2_Toucher: { screen: Type6a2_Toucher },
  Type6b_Toucher: { screen: Type6b_Toucher },
  Type6b1_Toucher: { screen: Type6b1_Toucher },
  Type_Toucher_Bravo: { screen: Type_Toucher_Bravo },
  Type7_Toucher: { screen: Type7_Toucher },
  Type8_Toucher: { screen: Type8_Toucher },
  Type8a_Toucher: { screen: Type8a_Toucher },
  Type8a1_Toucher: { screen: Type8a1_Toucher },
  Type8a2_Toucher: { screen: Type8a2_Toucher },
  Type8b_Toucher: { screen: Type8b_Toucher },
  Type8b1_Toucher: { screen: Type8b1_Toucher },
  Le_Glisser: { screen: Le_Glisser },
  Le_Glisser1: { screen: Le_Glisser1 },
  Le_Glisser2: { screen: Le_Glisser2 },
  Le_Glisser3: { screen: Le_Glisser3 },
  Le_Glisser4: { screen: Le_Glisser4 },
  Le_Glisser5: { screen: Le_Glisser5 },
  Le_Zoom: { screen: Le_Zoom },
  Le_Zoom1: { screen: Le_Zoom1 },
  Le_Zoom2: { screen: Le_Zoom2 },
  Le_Zoom3: { screen: Le_Zoom3 },
  Vocabulaire_Ecran_Accueil: { screen: Vocabulaire_Ecran_Accueil },
  Vocabulaire_Ecran_Accueil2: { screen: Vocabulaire_Ecran_Accueil2 },
  Vocabulaire_Applications: { screen: Vocabulaire_Applications },
  Vocabulaire_Icones: { screen: Vocabulaire_Icones },
  Vocabulaire_Icones2: { screen: Vocabulaire_Icones2 },
  Vocabulaire_Menu: { screen: Vocabulaire_Menu },
  Vocabulaire_Menu2: { screen: Vocabulaire_Menu2 },
  Vocabulaire_Internet: { screen: Vocabulaire_Internet },
  Vocabulaire_Internet2: { screen: Vocabulaire_Internet2 },
  Vocabulaire_Internet3: { screen: Vocabulaire_Internet3 }

});

const AppNav = createAppContainer(MainNavigator)

export default AppNav
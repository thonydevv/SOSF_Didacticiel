import React from 'react';
import { Header } from 'react-native-elements';

//Texte du haut "APPRENDRE À UTILISER UNE TABLETTE"
export default class Texte_Du_Haut extends React.Component {
  
  render() {
    return (

      <Header 
      statusBarProps={{ barStyle: 'light-content' }}
      color={'#008b8b'}
      placement="left"
      centerComponent={{ text: 'APPRENDRE A UTILISER UNE TABLETTE', style: { color: '#fff', fontFamily: 'Roboto', fontSize: 30 }}}
      containerStyle={{ backgroundColor: '#008b8b' }}
      />
      
    );
  }
}
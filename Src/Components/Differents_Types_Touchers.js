import React from 'react';
import { Header } from 'react-native-elements';

//Texte du haut "Qu'est ce qu'un écran tactile"...
export default class TDH_Ecran_Tactile extends React.Component {
  
  render() {
    return (

      <Header 
      statusBarProps={{ barStyle: 'light-content' }}
      color={'#008b8b'}
      placement="left"
      centerComponent={{ text: "Les différents types de touchers  ", style: { color: '#fff', fontFamily: 'Roboto', fontSize: 30 }}}
      containerStyle={{ backgroundColor: '#8a2be2' }}
      />

    );
  }
}
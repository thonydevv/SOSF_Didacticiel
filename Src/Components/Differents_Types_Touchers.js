import React from 'react';
import { Header } from 'react-native-elements';

//Texte du haut "Qu'est ce qu'un écran tactile"...
export default class Differents_Types_Touchers extends React.Component {
  
  render() {
    return (

      <Header 
      statusBarProps={{ barStyle: 'light-content' }}
      color={'#008b8b'}
      placement="left"
      centerComponent={{ text: "Les différents types de touchers", style: { color: '#fff', fontFamily: 'Roboto', fontSize: 30 }}}
      containerStyle={{ backgroundColor: '#8a2be2' }}
      />

    );
  }
}
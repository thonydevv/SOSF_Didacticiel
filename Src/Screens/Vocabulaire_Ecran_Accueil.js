import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';

import TDH_Vocabulaire_De_Base from '../Components/TDH_Vocabulaire_De_Base';

// Vocabulaire de base : L'écran d'accueil...
export default class Vocabulaire_Ecran_Accueil extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Vocabulaire_Ecran_Accueil2');
  }

  render() {
    return (

      <View style={styles.container}>
        <TDH_Vocabulaire_De_Base/>

        <TouchableOpacity style={styles.homebutton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={require('../Images/home_button.png')} />
        </TouchableOpacity>

        <Text style={styles.t2}>1- L'ECRAN D'ACCUEIL</Text>
        <Text style={styles.t1}>L'écran d'accueil, c'est le premier écran que vous voyez une fois la 
        tablette allumée. C'est la "porte d'entrée" de la tablette.</Text>
        <Text style={styles.t1}>Cet écran est personnalisable, on peut l'organiser et lui donner 
        l'apparence que l'on souhaite.</Text>

        <Button title={'PAGE SUIVANTE ->'} onPress={this._nextPage} />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 240
  },

  t1: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
    borderWidth: 1,
    marginBottom: 40,
    marginLeft: 15,
    marginRight: 15
  },

  t2:{
  fontSize: 40,
  color: 'black',
  fontFamily: 'Roboto',
  fontWeight: 'bold',
  marginBottom: 40,
  marginTop: 50,
  marginRight: 170,
  },

  homebutton: {
    marginLeft: 550
  }

});

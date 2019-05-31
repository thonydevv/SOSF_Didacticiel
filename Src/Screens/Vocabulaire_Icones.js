import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';

import TDH_Vocabulaire_De_Base from '../Components/TDH_Vocabulaire_De_Base';

// Vocabulaire de base : Qu'est ce que icônes...
export default class Vocabulaire_Icones extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Vocabulaire_Icones2');
  }

  render() {
    return (

      <View style={styles.container}>
        <TDH_Vocabulaire_De_Base/>

        <TouchableOpacity style={styles.homebutton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={require('../Images/home_button.png')} />
        </TouchableOpacity>

        <Text style={styles.t2}>3- LES ICONES</Text>
        <Text style={styles.t1}>L'icône est une petite image qui représente l'application. C'est
        souvent le logo de l'application. Il suffit ensuite de toucher l'icône
        pour "ouvrir" l'application et profiter de ses fonctions.</Text>

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
    marginBottom: 355
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
  marginRight: 300,
  },

  homebutton: {
    marginLeft: 550
  }

});

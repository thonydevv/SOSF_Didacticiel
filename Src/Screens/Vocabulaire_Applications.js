import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';

import TDH_Vocabulaire_De_Base from '../Components/TDH_Vocabulaire_De_Base';

// Vocabulaire de base : Qu'est ce que applications...
export default class Vocabulaire_Applications extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Menu_2');
  }
  render() {

    return (
      <View style={styles.container}>
        <TDH_Vocabulaire_De_Base/>

        <TouchableOpacity style={styles.homebutton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={require('../Images/home_button.png')} />
        </TouchableOpacity>

        <Text style={styles.t2}>2- LES APPLICATIONS</Text>
        <Text style={styles.t1}>Une application (ou "appli") est un petit programme informatique
        capable de réaliser une tâche bien précise. Tout ce que l'on peut faire
        avec une tablette se fait via une application.</Text>
        <Text style={styles.t1}>Ainsi, chaque application a sa spécificité. Par exemple, il existe
        des applications pour écouter de la musique, rechercher des recettes, 
        envoyer une message, etc...</Text>

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
    marginBottom: 166
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

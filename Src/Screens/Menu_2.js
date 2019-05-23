import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import Texte_Du_Haut from '../Components/Texte_Du_Haut';
import Indications from '../Components/Indications';

//Menu 2
export default class Menu_2 extends React.Component {
  render() {

    return (
      <View style={styles.container}>

        <Texte_Du_Haut/>

        <TouchableOpacity style={styles.homebutton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={require('../Images/home_button.png')} />
        </TouchableOpacity>

        <Indications/>
        
        <Text style={styles.t1} >2ème partie</Text>
        <Text style={styles.t2} >LE VOCABULAIRE DE BASE</Text>

        <TouchableOpacity style={styles.o1} onPress={() => this.props.navigation.navigate('Vocabulaire_Ecran_Accueil')} >
          <Text style={styles.t3} >L'ECRAN D'ACCUEIL</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.o1} onPress={() => this.props.navigation.navigate('Vocabulaire_Applications')} >
          <Text style={styles.t3} >LES APPLICATIONS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.o1} onPress={() => this.props.navigation.navigate('Vocabulaire_Icones')} >
          <Text style={styles.t3} >LES ICONES</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.o1} onPress={() => this.props.navigation.navigate('Vocabulaire_Menu')} >
          <Text style={styles.t3} >LE MENU</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.o1} onPress={() => this.props.navigation.navigate('Vocabulaire_Internet')} >
          <Text style={styles.t3} >INTERNET</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.o1} onPress={() => this.props.navigation.navigate('Vocabulaire_Train')} >
          <Text style={styles.t3} >EXERCER-VOUS</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: -41,
    justifyContent: 'center',
    alignItems: 'center',
  },

  t1: {
    fontSize: 30,
    color: '#d2691e',
  },

  t2: {
    fontSize: 40,
    color: '#d2691e',
    fontWeight: 'bold'
  },

  t3:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },

  o1: {
    backgroundColor: '#faf0e6',
    padding: 10,
    width: 350,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15
  },

  o2: {
    backgroundColor: '#faf0e6',
    padding: 10,
    width: 420,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15
  },

  homebutton: {
    marginLeft: 550
  }

});


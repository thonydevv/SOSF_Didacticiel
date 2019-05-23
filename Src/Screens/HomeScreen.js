import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Indications from '../Components/Indications';
import Texte_Du_Haut from '../Components/Texte_Du_Haut'

//HomeScreen page principale
export default class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <Texte_Du_Haut/>
        <Indications/>

        <View style={styles.bluecontainer}>
            <Text style={styles.t1}>1ère partie</Text>
          <TouchableOpacity onPress = {() => this.props.navigation.navigate('Menu_1')}>
            <Text style={styles.t2}>INTERAGIR AVEC L'ECRAN </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.orangecontainer}>
            <Text style={styles.t1}>2ème partie</Text>
          <TouchableOpacity onPress = {() => this.props.navigation.navigate('Menu_2')}>
            <Text style={styles.t2}>LE VOCABULAIRE DE BASE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.greencontainer}>
            <Text style={styles.t1}>3ème partie</Text>
          <TouchableOpacity onPress = {() => this.props.navigation.navigate('Menu_3')}>
            <Text style={styles.t2}>INTERNET et LA CONNEXION WIFI </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -128,
    justifyContent: 'center',
    alignItems: 'center',
  },

  t1: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto'
  },

  t2: {
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  },

  bluecontainer: {
    borderWidth: 1,
    width: 450,
    height: 100,
    marginTop: 100,
    alignItems:'center',
    backgroundColor: '#f0ffff',
    borderColor: '#00bfff'
  },

  orangecontainer: {
    borderWidth: 1,
    width: 450,
    height: 100,
    marginTop: 100,
    alignItems: 'center',
    backgroundColor: '#faf0e6',
    borderColor: '#ff8c00'
  },

  greencontainer: {
    borderWidth: 1,
    width: 550,
    height: 100,
    marginTop: 100,
    alignItems:'center',
    backgroundColor: '#90ee90',
    borderColor: '#006400'
  }

});

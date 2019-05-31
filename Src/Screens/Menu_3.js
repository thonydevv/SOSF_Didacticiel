import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import Texte_Du_Haut from '../Components/Texte_Du_Haut';
import Indications from '../Components/Indications';

//Menu 3
export default class Menu_3 extends React.Component {
  render() {

    return (
      <View style={styles.container}>

        <Texte_Du_Haut/>

        <TouchableOpacity style={styles.homebutton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={require('../Images/home_button.png')} />
        </TouchableOpacity>

        <Indications/>
        
        <Text style={styles.t1} >3ème partie</Text>
        <Text style={styles.t2} >INTERNET ET LA CONNEXION WIFI</Text>

        <TouchableOpacity style={styles.o2} onPress={() => this.props.navigation.navigate('Internet')} >
          <Text style={styles.t3} >Les différentes utilités d'Internet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.o1} onPress={() => this.props.navigation.navigate('Internet2')} >
          <Text style={styles.t3} >Comment obtenir une connexion sur sa tablette ?</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: -339,
    justifyContent: 'center',
    alignItems: 'center',
  },

  t1: {
    fontSize: 30,
    color: '#d2691e',
  },

  t2: {
    fontSize: 35,
    color: '#d2691e',
    fontWeight: 'bold'
  },

  t3:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  o1: {
    backgroundColor: '#90ee90',
    padding: 10,
    width: 400,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 15,
    marginBottom: 15
  },

  o2: {
    backgroundColor: '#90ee90',
    padding: 10,
    width: 260,
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15
  },

  homebutton: {
    marginLeft: 550
  }

});


import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import Texte_Du_Haut from '../Components/Texte_Du_Haut';
import Indications from '../Components/Indications';

//Menu 1
export default class Menu_1 extends React.Component {

  _previousPage = () => {
    this.props.navigation.navigate('HomeScreen');
  }

  render() {

    return (
      <View style={styles.container}>
      
        <Texte_Du_Haut/>

        <TouchableOpacity style={styles.homebutton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={require('../Images/home_button.png')} />
        </TouchableOpacity>
        
        <Indications/>

        <Text style={styles.t1} >1ère partie </Text>
        <Text style={styles.t2} >INTERAGIR AVEC L'ECRAN </Text>

        <TouchableOpacity style={styles.o2} onPress={() => this.props.navigation.navigate('Ecran1_Tactile')}>
          <Text style={styles.t3} >Qu'est-ce qu'un écran tactile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.o1} onPress={() => this.props.navigation.navigate('Type4_Toucher')}>
          <Text style={styles.t3} >LE TOUCHER COURT</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.o1} onPress={() => this.props.navigation.navigate('Type7_Toucher')} >
          <Text style={styles.t3} >LE TOUCHER LONG</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.o1} onPress={() => this.props.navigation.navigate('Le_Glisser')} >
          <Text style={styles.t3} >LE GLISSER</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.o1} onPress={() => this.props.navigation.navigate('Le_Zoom')} >
          <Text style={styles.t3} >LE ZOOM</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: -137,
    justifyContent: 'center',
    alignItems: 'center',
  },
  t1: {
    fontSize: 30,
    color: '#0000ff',
  },

  t2: {
    fontSize: 40,
    color: '#0000ff',
    fontWeight: 'bold'
  },

  t3:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },

  o1: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    width: 350,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15
  },

  o2: {
    backgroundColor: '#f5f5f5',
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

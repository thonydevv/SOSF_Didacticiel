import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';

import Differents_Types_Touchers from '../Components/Differents_Types_Touchers';

//Ecran Le_Glisser "LE GLISSER EST UN TOUCHER SUR UNE CERTAINE LONGUEUR..."
export default class Le_Glisser extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Le_Glisser1');
  }

  render() {
    return (

      <View style={styles.container}>

        <Differents_Types_Touchers/>

        <TouchableOpacity style={styles.homebutton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={require('../Images/home_button.png')} />
        </TouchableOpacity>

        <Text style={styles.t2}>3- LE GLISSER</Text>
        <Text style={styles.t1}>Le GLISSER est un toucher sur un certaine longueur. Comme pour les autres
        il faut toucher l'écran délicatement, et cette fois-ci, il faut comme "balayer"
        son doigt vers la gauche ou vers la droite</Text>
        <Text style={styles.t1}>C'est une interaction assez courant qui s'utilise surtout pour accéder
        d'une page à une autre, c'est comme tourner les pages d'un magasine</Text>
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
    marginBottom: 220,
  },

  t1: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
    borderWidth: 1,
    marginBottom: 40
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

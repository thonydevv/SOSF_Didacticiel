import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity} from 'react-native';

import TDH_Vocabulaire_De_Base from '../Components/TDH_Vocabulaire_De_Base';

// Vocabulaire de base :screenshot de la tablette...
export default class Vocabulaire_Ecran_Accueil2 extends React.Component {

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

        <Text style={styles.t2}>1- L'ECRAN D'ACCUEIL</Text>
        <Text style={styles.t1}>Basiquement, l'écran d'accueil ressemble à cela :</Text>
        <Text>Information diverses: heure, état de la batterie, connexion wifi, localisation.</Text>
        <Text>Jour et Heure</Text>
        <Text>Metéo</Text>

        <Image source={require('../Images/tablet_homescreen.jpg')} />

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

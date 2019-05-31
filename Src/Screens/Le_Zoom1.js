import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';

import Differents_Types_Touchers from '../Components/Differents_Types_Touchers';

//Ecran Le_Zoom1 "Il est très important que vous suiviez les consignes sur la page suivant..."
export default class Le_Zoom1 extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Le_Zoom2');
  }

  render() {
    return (
      <View style={styles.container}>

        <Differents_Types_Touchers/>

        <TouchableOpacity style={styles.homebutton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={require('../Images/home_button.png')} />
        </TouchableOpacity>

        <Text style={styles.t1}>4- LE ZOOM</Text>
        <Text style={styles.t2}>Essayons le ZOOM !
        Il est très important que vous suiviez les consignes sur la page suivante,
        dans l'ordre.</Text>

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
    marginBottom: 375
  },

  homebutton: {
    marginLeft: 550
  },

  t1: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 150,
    marginRight: 400
  },

  t2: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#a9a9a9',
    marginBottom: 20
  },

});

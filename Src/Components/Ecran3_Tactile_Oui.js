import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//le "Oui" du dialogue qui s'affichent dans l'écran 3 au bout de 30 secondes
export default class Ecran3_Tactile_Oui extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.t1} >Appuyer sur <Text style={styles.non} >NON</Text> si vous n'avez pas compris ce que nous venons de voir</Text>
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
    borderColor: '#a9a9a9',
    backgroundColor: '#a9a9a9'
  },

  non: {
    fontSize: 30,
    color: '#9932cc',
    fontFamily: 'Roboto',
  }

});

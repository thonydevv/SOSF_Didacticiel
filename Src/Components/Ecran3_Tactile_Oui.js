import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//le "Oui" du dialogue qui s'affichent dans l'écran 3 au bout de 30 secondes
export default class Ecran3_Tactile_Oui extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <Text>Appuyer sur OUI si vous avez compris ce que nous venons de voir</Text>
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
});

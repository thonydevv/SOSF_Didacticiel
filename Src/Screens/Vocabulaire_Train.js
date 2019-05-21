import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

// Vocabulaire de base : Entrainement premier screen...
export default class Vocabulaire_Train extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Menu_2');
  }
  render() {

    return (
      <View style={styles.container}>
        <Text>Avant de passer à la partie suivante, exerçons-nous un peu !</Text>
        <Text>Sur l'écran à gauche, replacez les mots en rouge dans les cadres 
        correspondants. Pour cela, touchez le mot choisi, et glissez-le jusqu'au
        cadre choisi</Text>
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

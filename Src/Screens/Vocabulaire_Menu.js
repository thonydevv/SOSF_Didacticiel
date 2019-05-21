import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

// Vocabulaire de base : Qu'est ce que icônes avec "Menu" en image...
export default class Vocabulaire_Menu extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Vocabulaire_Menu2');
  }
  render() {

    return (
      <View style={styles.container}>
        <Text>4- LE MENU</Text>
        <Image source={require('../Images/menu.jpg')}/>
        <Text>Le Menu est un écran auquel on accède en touchant l'icône "Applis"
        sur l'écran d'accueil.</Text>
        <Text>Le Menu la "réserve d'applications" de la tablette, c'est à cet endroit
        que l'on trouve toutes les applications et toutes les informations stockées
        dans la tablette.</Text>
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
});

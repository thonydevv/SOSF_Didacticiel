import React from 'react';
import { StyleSheet, View, Text, Button, Image} from 'react-native';

// Vocabulaire de base :screenshot de la tablette...
export default class Vocabulaire_Ecran_Accueil2 extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Menu_2');
  }
  render() {

    return (
      <View style={styles.container}>
        <Text>1- L'ECRAN D'ACCUEIL</Text>
        <Text>Basiquement, l'écran d'accueil ressemble à cela :</Text>
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
});

import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

// Vocabulaire de base : L'écran d'accueil...
export default class Vocabulaire_Ecran_Accueil extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Vocabulaire_Ecran_Accueil2');
  }
  render() {

    return (
      <View style={styles.container}>
        <Text>1- L'ECRAN D'ACCUEIL</Text>
        <Text>L'écran d'accueil, c'est le premier écran que vous voyez une fois la 
        tablette allumée. C'est la "porte d'entrée" de la tablette.</Text>
        <Text>Cet écran est personnalisable, on peut l'organiser et lui donner 
        l'apparence que l'on souhaite.</Text>
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

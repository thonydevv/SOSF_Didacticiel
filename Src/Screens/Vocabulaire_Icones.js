import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

// Vocabulaire de base : Qu'est ce que icônes...
export default class Vocabulaire_Icones extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Vocabulaire_Icones2');
  }
  render() {

    return (
      <View style={styles.container}>
        <Text>3- LES ICONES</Text>
        <Text>L'icône est une petite image qui représente l'application. C'est
        souvent le logo de l'application. Il suffit ensuite de toucher l'icône
        pour "ouvrir" l'application et profiter de ses fonctions.</Text>
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

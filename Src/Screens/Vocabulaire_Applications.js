import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

// Vocabulaire de base : Qu'est ce que applications...
export default class Vocabulaire_Applications extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Menu_2');
  }
  render() {

    return (
      <View style={styles.container}>
        <Text>2- LES APPLICATIONS</Text>
        <Text>Une application (ou "appli") est une petit programme informatique
        capable de réaliser une tâche bien précise. Tout ce que l'on peut faire
        avec une tablette se fait via une application.</Text>
        <Text>Ainsi, chaque application a sa spécificité. Par exemple, il existe
        des applications pour écouter de la musique, rechercher des recettes, 
        envoyer une message, etc...</Text>
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

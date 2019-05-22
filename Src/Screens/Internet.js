import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//Les différentes utilités d'Internet first screen..."
export default class Internet extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Internet2');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>INTERNET a diverses utilités, et notamment, il sert à:</Text>
        <Text>Communiquer avec ses proches</Text>
        <Text>Faire des achats</Text>
        <Text>Consulter l'actualité</Text>
        <Text>Ecouter de la musique</Text>
        <Text>Réserver ses vacances</Text>
        <Text>Faire des recherches</Text>
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

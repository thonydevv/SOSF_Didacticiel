import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// Vocabulaire de base : Sur la tablette, on accède à Internet via l'application...
export default class Vocabulaire_Internet3 extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Menu_2');
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>5- Internet</Text>
        <Text>Sur la Tablette, on accède à Internet via l'application qui s'appelle
        INTERNET, tout simplement.</Text>
        <Text>Mais pour cela, il nous faut une CONNEXION internet... et plus
        particulièrement, une connexion WIFI.</Text>
        <Button title={'PAGE SUIVANTE ->'} onPress={this._nextPage}/>
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

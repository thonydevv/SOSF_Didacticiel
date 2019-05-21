import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// Vocabulaire de base : qu'est ce qu'internet ? c'est un réseau informatique MONDIAL...
export default class Vocabulaire_Internet extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Vocabulaire_Internet2');
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>5- Internet</Text>
        <Text>Qu'est ce qu'Internet</Text>
        <Text>C'est un réseau informatique MONDIAL qui relie des centaines de milliers
        d'appareils informatiques entre eux (ordinateurs, téléphones, tablettes etc...).
        Cela dans le but de communiquer, d'échanger des informations, d'accéder à des
        informations.</Text>
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

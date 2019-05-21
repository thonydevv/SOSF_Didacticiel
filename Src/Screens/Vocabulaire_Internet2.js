import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// Vocabulaire de base : Cela est possible peu importe l'endroit sur la planète...
export default class Vocabulaire_Internet2 extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Vocabulaire_Internet3');
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>5- Internet</Text>
        <Text>Cela est possible peu importe l'endroit sur la planète où nous 
        nous trouvons. En d'autres termes, à Metz, New York, Londre, Bombay où
        n'importe où dans le monde, le CONTENU d'Internet reste le même.</Text>
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

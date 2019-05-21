import React from 'react';
import { StyleSheet, Text } from 'react-native';

//Texte du haut "APPRENDRE À UTILISER UNE TABLETTE"
export default class HomeScreen extends React.Component {
  
  render() {
    return (
      <Text style={styles.texte}>
        APPRENDRE À UTILISER UNE TABLETTE
      </Text>
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

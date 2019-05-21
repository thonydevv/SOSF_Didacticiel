import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

//Texte Bouton Ecran 4 "Appuyer sur ce bouton pour accéder à la page suivante ..."
export default class Type4_Toucher_Text_Button extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Appuyer sur ce bouton pour accéder à la page suivante.</Text>
      </View>
    )}
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

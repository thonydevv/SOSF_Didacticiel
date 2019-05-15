import React from 'react';
import { StyleSheet, Text } from 'react-native';

//Indications du haut "TOUCHEZ LA PARTIE QUE VOUS SOUHAITEZ VOIR OU REVOIR"
export default class HomeScreen extends React.Component {
  render() {
    return(
      <Text style={styles.texte}>
        Touchez la partie que vous souhaitez voir ou revoir
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  texte: {

  }
})
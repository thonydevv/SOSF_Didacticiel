import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//Ecran Le_Glisser "LE GLISSER EST UN TOUCHER SUR UNE CERTAINE LONGUEUR..."
export default class Le_Glisser extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Le_Glisser1');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>3- LE GLISSER</Text>
        <Text>Le GLISSER est un toucher sur un certaine longueur. Comme pour les autres
        il faut toucher l'écran délicatement, et cette fois-ci, il faut comme "balayer"
        son doigt vers la gauche ou vers la droite</Text>
        <Text>C'est une interaction assez courant qui s'utilise surtout pour accéder
        d'une page à une autre, c'est comme tourner les pages d'un magasine</Text>
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

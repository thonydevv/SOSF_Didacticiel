import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

//Ecran 6b1 qui ajoute "Réésayez en appuyant un peu moins fort sur l'écran" par rapport au 6
export default class Type6b1_Toucher extends React.Component {

  _shortPress = () => {
    this.props.navigation.navigate('Type6a_Toucher');
  }

  _longPress = () => {
    this.props.navigation.navigate('Type5_Toucher');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>1- LE TOUCHER COURT</Text>
        <Text>Essayons le toucher court !</Text>
        <Text>Touchez le rond rouge à droite</Text>
        <TouchableHighlight onPress={this._shortPress} onLongPress={this._longPress} > 
        <Image source={require('../Images/Red_Circle(small).png')}/>
        </TouchableHighlight>
        <Text>Réésayez en appuyant un peu moins fort sur l'écran.</Text>
        <Text>Réésayez encore une fois un toucher COURT sur le rond rouge, plus délicatement.</Text>
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

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

//Ecran 8b2 "Vous n'appuyez pas assez longtemps sans bouger, réésayez..."
export default class Type8b2_Toucher extends React.Component {

  _shortPress = () => {
    this.props.navigation.navigate('Type7_Toucher');
  }

  _longPress = () => {
    this.props.navigation.navigate('Type8_Toucher');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>2- LE TOUCHER LONG</Text>
        <Text>Essayons le toucher long !</Text>
        <Text>Touchez le carré bleu à droite</Text>
        <TouchableHighlight onPress={this._shortPress} onLongPress={this._longPress}> 
        <Image source={require('../Images/carré_bleu.png')}/>
        </TouchableHighlight>
        <Text>Rééssayez en appuyant un peu plus longtemps.</Text>
        <Text>Vous n'appuyez pas assez longtemps sans bouger, réésayez avec un toucher
        plus long immobile sur le carré bleu</Text>
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

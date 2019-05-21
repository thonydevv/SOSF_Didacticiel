import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

//Ecran 8 "Essayons le toucher long ! touchez de manière prolongée le carré..."
export default class Type8_Toucher extends React.Component {

  _shortPress = () => {
    this.props.navigation.navigate('Type8b_Toucher');
  }

  _longPress = () => {
    this.props.navigation.navigate('Type8a_Toucher');
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

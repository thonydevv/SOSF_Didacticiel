import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight } from 'react-native';

//Ecran 6 "Essayons le toucher court ! toucher le rond ruge à droite..."
export default class Type6_Toucher extends React.Component {

  _shortPress = () => {
    this.props.navigation.navigate('Type6a_Toucher');
  }

  _longPress = () => {
    this.props.navigation.navigate('Type6b_Toucher');
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

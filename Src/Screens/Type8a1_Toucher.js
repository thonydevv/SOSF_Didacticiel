import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

//Ecran 8a2 apparition du carré rose..."
export default class Type8a1_Toucher extends React.Component {

  _shortPress = () => {
    this.props.navigation.navigate('');
  }

  _longPress = () => {
    this.props.navigation.navigate('Type8a2_Toucher');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>2- LE TOUCHER COURT</Text>
        <Text>Essayons le toucher court !</Text>
        <Text>Touchez le rond rouge à droite</Text>
        <TouchableHighlight> 
        <Image source={require('../Images/carré_bleu.png')}/>
        </TouchableHighlight>
        <Text>C'est bien ! Essayez encore avec le carré vert.</Text>
        <TouchableHighlight>
        <Image source={require('../Images/carré_vert.png')}/>
        </TouchableHighlight>
				<Text>Parfait ! Encore une fois avec le carré rose ?</Text>
        <TouchableHighlight onPress={this._shortPress} onLongPress={this._longPress}>
				<Image source={require('../Images/carré_rose.jpeg')}/>
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

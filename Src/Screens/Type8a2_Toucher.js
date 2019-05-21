import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button } from 'react-native';

//Ecran 8a2 apparition du carré rose..."
export default class Type8a2_Toucher extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Type_Toucher_Bravo');
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
				<Image source={require('../Images/carré_rose.jpeg')}/>
        <Text>Bravo ! TOUCHER COURT sur le bouton suivant pour passer à la suite</Text>
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

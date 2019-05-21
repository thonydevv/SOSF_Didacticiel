import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';

//Ecran 6 "Essayons le toucher court ! toucher le rond ruge à droite..."
export default class Type6a2_Toucher extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Type_Toucher_Bravo');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>1- LE TOUCHER COURT</Text>
        <Text>Essayons le toucher court !</Text>
        <Text>Touchez le rond rouge à droite</Text>
        <TouchableOpacity> 
        <Image source={require('../Images/Red_Circle(small).png')} /> 
        <Text></Text>
        </TouchableOpacity>
        <Text>C'est bien ! essayez encore, avec le rond vert</Text>
        <TouchableOpacity> 
        <Image source={require('../Images/green_circle.jpg')} /> 
        <Text></Text>
        </TouchableOpacity>
        <Text>Parfait ! Encore une fois avec le rond orange ?</Text>
        <TouchableOpacity> 
        <Image source={require('../Images/orange_circle.jpg')} /> 
        <Text></Text>
        </TouchableOpacity>
        <Text>De la même manière toucher ce bouton pour accéder à la suite.</Text>
        <Button title={'PAGE SUIVANTE->'} onPress={this._nextPage} />
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

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

import Differents_Types_Touchers from '../Components/Differents_Types_Touchers';

//Ecran 8a1 apparition du carré vert...
export default class Type8a_Toucher extends React.Component {

  _shortPress = () => {
    this.props.navigation.navigate('Type8b_Toucher');
  }

  _longPress = () => {
    this.props.navigation.navigate('Type8a1_Toucher');
  }

  render() {
    return (

      <View style={styles.container}>
      <Differents_Types_Touchers/>

      <View style={styles.container2}>

        <View style={styles.container1}>
          <Text style={styles.t1}>2- LE TOUCHER LONG</Text>
          <Text style={styles.t2}>Essayons le toucher long !</Text>
          <Text style={styles.t4}>Touchez le carré bleu à droite</Text>
          <Image style={styles.fleche} source={require('../Images/fleche4.png')}/>
        </View>

        <View>
          <TouchableHighlight style={styles.img}> 
          <Image source={require('../Images/carré_bleu.png')}/>
          </TouchableHighlight>
        </View>

      </View>

      <View>
        <Text style={styles.t3} >C'est bien ! Essayez encore avec le carré vert.</Text>
        <TouchableHighlight style={styles.img1} onPress={this._shortPress} onLongPress={this._longPress}>
        <Image source={require('../Images/carré_vert.png')}/>
        </TouchableHighlight>
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 320,
  },

  container1: {
    flexDirection:'column'
  },

  container2: {
    flexDirection:'row'
  },

  t1: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 40,
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },

  t2: {
    marginRight: 250,
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
    borderWidth: 1,
    borderColor: 'grey',
  },

  t3: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
    borderWidth: 1,
    borderColor: 'grey',
  },

  t4: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
    borderWidth: 1,
    borderColor: 'grey',
    width: 270
  },

  img: {
    marginTop: 150,
    marginLeft: -120,
  },

  img1: {
    marginLeft: 475
  },

  fleche: {
    marginLeft: 320
  }

});




import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

import Differents_Types_Touchers from '../Components/Differents_Types_Touchers';

//Ecran 8 "Essayons le toucher long ! touchez de manière prolongée le carré..."
export default class Type8b_Toucher extends React.Component {

  _shortPress = () => {
    this.props.navigation.navigate('Type8b1_Toucher');
  }

  _longPress = () => {
    this.props.navigation.navigate('Type8a_Toucher');
  }

  render() {
    return (

      <View style={styles.container}>

        <Differents_Types_Touchers/>

        <View style={styles.container2}>

          <View style={styles.container1}>
            <Text style={styles.t1}>2- LE TOUCHER LONG</Text>
            <Text style={styles.t2}>Essayons le toucher long !</Text>
            <Text style={styles.t3}>Touchez le carré bleu à droite</Text>
            <Image style={styles.img1} source={require('../Images/fleche4.png')}/>
          </View>

          <View>
            <TouchableHighlight style={styles.img} onPress={this._shortPress} onLongPress={this._longPress}> 
            <Image source={require('../Images/carré_bleu.png')}/>
            </TouchableHighlight>
          </View>

        </View>
        <Text style={styles.t4} >Rééssayez en appuyant un peu plus longtemps.</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 430,
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
    width: 270
  },

  t4: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
    borderWidth: 1,
    borderColor: 'grey',
  },

  img: {
    marginTop: 150,
    marginLeft: -120,
  },

  img1: {
    marginLeft: 320
  }

  });
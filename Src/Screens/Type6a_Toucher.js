import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight } from 'react-native';

import Differents_Types_Touchers from '../Components/Differents_Types_Touchers';

//Ecran 6 "Essayons le toucher court ! toucher le rond ruge à droite..."
export default class Type6a_Toucher extends React.Component {

  _shortPress = () => {
    this.props.navigation.navigate('Type6a1_Toucher');
  }

  _longPress = () => {
    this.props.navigation.navigate('Type6b1_Toucher');
  }

  render() {
    return (

      <View style={styles.container}>
        <Differents_Types_Touchers/>

        <View style={styles.container2}>

          <View style={styles.container1}>
            <Text style={styles.t1}>1- LE TOUCHER COURT</Text>
            <Text style={styles.t2}>Essayons le toucher court !</Text>
            <Text style={styles.t4}>Touchez le rond rouge à droite</Text>
            <Image style={styles.fleche} source={require('../Images/fleche4.png')}/>
          </View>
          
          <View>
            <TouchableOpacity style={styles.img}>
            <Image source={require('../Images/Red_Circle(small).png')}/> 
            </TouchableOpacity>
          </View>

        </View>

        <View>
          <Text style={styles.t3} >C'est bien ! essayez encore, avec le rond vert</Text>
          <TouchableHighlight style={styles.img1} onPress={this._shortPress} onLongPress={this._longPress}> 
          <Image source={require('../Images/green_circle.jpg')}/> 
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
    marginBottom: 360,
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

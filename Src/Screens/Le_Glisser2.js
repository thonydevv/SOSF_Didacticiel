import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import Slider from '@react-native-community/slider';

import Differents_Types_Touchers from '../Components/Differents_Types_Touchers';

//Ecran Le_Glisser2 "Essayons le glisser différemment ! le GLISSER étant..."
export default class Le_Glisser2 extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      slideDone: false
    };
  }

  _nextPage = () => {
    this.props.navigation.navigate('Le_Glisser3');
  }

  _slideComplete = () => {
    this.setState({slideDone: true})
  }

  render() {
    if (this.state.slideDone == false){
    return (

      <View style={styles.container}>

        <Differents_Types_Touchers/>

        <TouchableOpacity style={styles.homebutton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={require('../Images/home_button.png')} />
        </TouchableOpacity>

        <Text style={styles.t2}>3- LE GLISSER</Text>
        <Text style={styles.t1}>Essayons le glisser différemment ! le GLISSER étant souvent utilisé
        pour tourner des pages, ou pour monter et descendre sur une même page,
        essayons ! GLISSER sur l'image de droite à gauche</Text>

        <Slider style={{width: 200, height: 100}} 
          minimumValue={-400}
          maximumValue={10}
          onSlidingComplete={this._slideComplete}/> 
      </View>

    );}else{
      return(

      <View style={styles.container}>

        <Differents_Types_Touchers/>

        <TouchableOpacity style={styles.homebutton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={require('../Images/home_button.png')} />
        </TouchableOpacity>

        <Text style={styles.t2}>3- LE GLISSER</Text>
        <Text style={styles.t1}>Essayons le glisser différemment ! le GLISSER étant souvent utilisé
        pour tourner des pages, ou pour monter et descendre sur une même page,
        essayons ! GLISSER sur l'image de droite à gauche</Text>

        <Slider style={{width: 200, height: 100}} 
          minimumValue={-400}
          maximumValue={10}
          onSlidingComplete={this._slideComplete}/>

        <Button title={'PAGE SUIVANTE ->'} onPress={this._nextPage} />
      </View>

      )
    }
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 340,
  },
  
  t1: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
    borderWidth: 1,
    marginBottom: 40
  },
  
  t2:{
    fontSize: 40,
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 50,
    marginRight: 300,
    },

    homebutton: {
      marginLeft: 550
    }

});
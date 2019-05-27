import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';

import TDH_Ecran_Tactile from '../Components/TDH_Ecran_Tactile';

//"Qu'est ce qu'un écran tactile ?" touchableOpacity
export default class Ecran1_Tactile extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      opacity: 0,
      click: 0,
    }  
  }

  _opacityShow = () => {
    this.setState({opacity: 100})
    setTimeout(() => {
      this.setState({opacity: 0});
      }, 800);
  }

  _countClick = () => {
    this.setState({click: this.state.click + 1});
    if (this.state.click === 4){
      this.setState({click: 0})
    }
  }

  _displayScreen = () => {
    if(this.state.click === 4){
      this.props.navigation.navigate('Ecran2_Tactile')
    }
  }

  _combinedFunctions = () => {
    this._opacityShow();
    this._countClick();
    this._displayScreen();
  }

  render() {
    return (

      <TouchableOpacity style={styles.container} onPress={this._combinedFunctions}>

        <TDH_Ecran_Tactile/>

        <TouchableOpacity style={styles.homebutton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={require('../Images/home_button.png')} />
        </TouchableOpacity>

        <View style={styles.v1} >
          <Text style={styles.t1}>C'est un écran avec lequel on intéragit par le toucher. {'\n'}Tout l'écran est TACTILE. Si vous le touchez, il va réagir.
          </Text>
        </View>

        <View style={styles.v2} >
          <Text style={styles.t2} >Essayez ! Touchez l'écran où vous voulez et regardez ce qu'il se passe...</Text>
          <Image style={{opacity: this.state.opacity, marginLeft: 40}} source={require('../Images/Red_Circle(small).png')} />
        </View> 

        <View style={styles.v3} >
          <Text style={styles.t1} >Essayez au moins 5 fois à des endroits différents de l'écran.</Text>
        </View>

      </TouchableOpacity>

    );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },

  v1: {
    flex: 1,
    justifyContent: 'center',
    width: 350,
    marginLeft: 30
  },

  v2: {
    flex: 1,
    justifyContent: 'center',
    width: 370,
    marginLeft: 100,
    flexDirection: 'row',
    marginTop: 130,
  },

  v3: {
    flex: 1,
    marginRight: 450,
    justifyContent: 'center',
    width: 300,
    marginLeft: 30
  },

  i: {
    marginLeft: 600,
    marginTop: 20,
    flexDirection: 'row'
  },

  t1: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
    borderWidth: 1,
  },

  t2: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
  },

  homebutton: {
    marginLeft: 550
  }

});

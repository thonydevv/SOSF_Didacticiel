import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

import Ecran3_Tactile_Oui from '../Components/Ecran3_Tactile_Oui';
import Ecran3_Tactile_Non from '../Components/Ecran3_Tactile_Non';
import TDH_Ecran_Tactile from '../Components/TDH_Ecran_Tactile';

//Qu'est ce qu'un écran tactile ? Avez-vous compris ?
export default class Ecran3_Tactile extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      timePassed: false
    };
  }

  _onPressYes = () => {
    this.props.navigation.navigate('Menu_1');
  }

  _onPressNo = () => {
    this.props.navigation.navigate('Ecran1_Tactile');
  }

  render() {
    setTimeout(() => {this.setState({timePassed: true})}, 3000);
    if (this.state.timePassed == false){
    return (

      <View style={styles.container}>

        <TDH_Ecran_Tactile/>

        <TouchableOpacity style={styles.homebutton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={require('../Images/home_button.png')} />
        </TouchableOpacity>

        <View style={styles.v1} >
          <Text style={styles.t1} >Avez-vous compris ?</Text>
          <Button title="OUI" onPress={this._onPressYes}/>
          <Button title="NON" onPress={this._onPressNo}/>
        </View>

      </View>

    );}else{
      return(

      <View style={styles.container2}>

        <TDH_Ecran_Tactile/>

        <TouchableOpacity style={styles.homebutton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={require('../Images/home_button.png')} />
        </TouchableOpacity>

        <View style={styles.v3} >
          <Text style={styles.t1} >Avez-vous compris ?</Text>
          <Button title="OUI" onPress={this._onPressYes}/>
          <Button title="NON" onPress={this._onPressNo}/>
        </View>

        <Image source={require('../Images/fleche.png')}/>
        
        <View style={styles.v2} >
          <Ecran3_Tactile_Non/>
          <Ecran3_Tactile_Oui/>
        </View>

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
    marginBottom: 320
  },

  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 170
  },

  t1: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
    borderWidth: 1,
    borderColor: '#a9a9a9',
  },

  v1: {
    flexDirection:'row',
    marginTop: 400
  },

  v2: {
    flexDirection:'row',
    marginBottom: 240
  },

  v3: {
    flexDirection:'row',
    marginTop: 150
  },

  homebutton: {
    marginLeft: 550
  }

});

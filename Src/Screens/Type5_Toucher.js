import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Type4_Toucher_Text_Button from '../Components/Type4_Toucher_Text_Button'

//Ecran 5 "Le TOUCHER COURT est assez rapide, il suffit que le doigt ..."
export default class Type5_Toucher extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      timePassed: false
    };
  }

  _nextPage = () => {
    this.props.navigation.navigate('Type6_Toucher');
  }

  render() {
    setTimeout(() => {this.setState({timePassed: true})}, 4000);
    if (this.state.timePassed == false){
    return (
      <View style={styles.container}>
      <Text>1- LE TOUCHER COURT</Text>
      <Text>Le TOUCHER COURT est assez rapide, il suffit que le doigt entre en contact
      avec l'écran pour que le toucher soit prise en compte par la tablette. Le doigt
      ne doit pas toucher l'écran pendant plus de 5 secondes</Text>
      <Text>C'est l'interaction avec l'écran la plus répandu. S'il n'est pas spécifié
      quoi que ce soit, le toucher doit être COURT.</Text>
      <Button title={'PAGE SUIVANTE ->'} onPress={this._nextPage}/>
      </View>
    );}else{
      return(
        <View style={styles.container}>
        <Text>1- LE TOUCHER COURT</Text>
        <Text>Le TOUCHER COURT est assez rapide, il suffit que le doigt entre en contact
        avec l'écran pour que le toucher soit prise en compte par la tablette. Le doigt
        ne doit pas toucher l'écran pendant plus de 5 secondes</Text>
        <Text>C'est l'interaction avec l'écran la plus répandu. S'il n'est pas spécifié
        quoi que ce soit, le toucher doit être COURT.</Text>
        <Button title={'PAGE SUIVANTE ->'} onPress={this._nextPage}/>
        <Type4_Toucher_Text_Button/>
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
  },
});

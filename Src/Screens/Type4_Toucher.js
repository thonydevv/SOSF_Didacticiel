import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Type4_Toucher_Text_Button from '../Components/Type4_Toucher_Text_Button'

//Ecran 4 "Sur une tablette, il existe plusieurs types de touchers ..."
export default class Type4_Toucher extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      timePassed: false
    };
  }

  _nextPage = () => {
    this.props.navigation.navigate('Type5_Toucher');
  }

  render() {
    setTimeout(() => {this.setState({timePassed: true})}, 4000);
    if (this.state.timePassed == false){
    return (
      <View style={styles.container}>
      <Text>Sur une tablette il existe plusieurs types de touchers : le toucher court,
      le toucher long, le glisser, le zoom, etc...</Text>
      <Button title={'PAGE SUIVANTE ->'} onPress={this._nextPage}/>
      </View>
    );}else{
      return(
        <View style={styles.container}>
        <Text>Sur une tablette il existe plusieurs types de touchers : le toucher court,
        le toucher long, le glisser, le zoom, etc...</Text>
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

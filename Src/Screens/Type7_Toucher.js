import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//Ecran 7 le TOUCHER LONG...
export default class Type7_Toucher extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      timePassed: false
    };
  }

  _nextPage = () => {
    this.props.navigation.navigate('Type8_Toucher');
  }
  
  render() {
    setTimeout(() => {this.setState({timePassed: true})}, 4000);
    if (this.state.timePassed == false){
    return (
      <View style={styles.container}>
        <Text>1- LE TOUCHER LONG</Text>
        <Text>Le TOUCHER LONG est tout aussi délicat que le toucher court, mais le doigt
        doit rester en contact avec l'écran longtemps. Le toucher doit durer en général
        un peu plus d'une seconde.</Text>
        <Text>Ce toucher long est moins répandu, et permet en général d'accéder
        à des fonctions inaccessibles avec un toucher court</Text>
        <Button title={'PAGE SUIVANTE ->'} onPress={this._nextPage}/>
      </View>
    );}else{
      return(
        <View>
        <Text>1- LE TOUCHER LONG</Text>
        <Text>Le TOUCHER LONG est tout aussi délicat que le toucher court, mais le doigt
        doit rester en contact avec l'écran longtemps. Le toucher doit durer en général
        un peu plus d'une seconde.</Text>
        <Text>Ce toucher long est moins répandu, et permet en général d'accéder
        à des fonctions inaccessibles avec un toucher court</Text>
        <Text>TOUCHER COURT sur ce bouton pour accéder à la page suivante.</Text>
        <Button title={'PAGE SUIVANTE ->'} onPress={this._nextPage}/>
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

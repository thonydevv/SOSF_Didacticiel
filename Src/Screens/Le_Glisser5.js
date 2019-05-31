import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Slider, Button } from 'react-native-elements';

import Differents_Types_Touchers from '../Components/Differents_Types_Touchers';

//Ecran Le_Glisser5 "Essayons à présent le GLISSER de bas en haut..."
export default class Le_Glisser5 extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      slideDone: false
    };
  }

  _nextPage = () => {
    this.props.navigation.navigate('Type_Toucher_Bravo');
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
        <Text style={styles.t1}>Essayons à présent le GLISSER de bas en haut, et de haut en bas, pour
        circuler sur une page. Pour lire le poème ci-dessous, il vous faut glisser
        dessus, dans le sens des flêches. Essayez !</Text>

        <Slider style={{width: 300, height: 200}}
          orientation={"vertical"}
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
          <Text style={styles.t1}>Essayons à présent le GLISSER de bas en haut, et de haut en bas, pour
          circuler sur une page. Pour lire le poème ci-dessous, il vous faut glisser
          dessus, dans le sens des flêches. Essayez !</Text>

          <Slider style={{width: 300, height: 200}}
            orientation={"vertical"}/>

          <Button title={"PAGE SUIVANTE ->"} onPress={this._nextPage} />
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
    marginBottom: 150
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

import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import Slider from '@react-native-community/slider';

import Differents_Types_Touchers from '../Components/Differents_Types_Touchers';

//Ecran Le_Glisser1 "Faites glisser, avec votre doigt, délicatement et sans le relever..."
//Utilisation du module react native community slider sur github
export default class Le_Glisser1 extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      slideDone: false
    };
  }

  _nextPage = () => {
    this.props.navigation.navigate('Le_Glisser2');
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
        <Text style={styles.t3}>Essayons le glisser !</Text>
        <Text style={styles.t1}>Faites glisser, avec votre doigt, délicatement et sans le relever
        de l'écran, le rond violet le long de la ligne grise ci_dessous, de gauche à
        droite. Relevez le doigt au bout de la ligne. Essayez plusieurs fois</Text>
        <Slider style={{width: 200, height: 100}} 
          minimumValue={0}
          maximumValue={10}
          onSlidingComplete={this._slideComplete}
        /> 
        <Text style={styles.t1} >Réésayez, toujours sur la ligne violette, mais cette fois-ci de droite
        à gauche. Essayez plusieurs fois.</Text>
      </View>

    );}else{
      return (      

        <View style={styles.container}>

          <Differents_Types_Touchers/>

          <TouchableOpacity style={styles.homebutton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
            <Image source={require('../Images/home_button.png')} />
          </TouchableOpacity>

          <Text style={styles.t2}>3- LE GLISSER</Text>
          <Text style={styles.t3}>Essayons le glisser !</Text>
          <Text style={styles.t1}>Faites glisser, avec votre doigt, délicatement et sans le relever
          de l'écran, le rond violet le long de la ligne grise ci_dessous, de gauche à
          droite. Relevez le doigt au bout de la ligne. Essayez plusieurs fois</Text>

          <Slider style={{width: 200, height: 100}} 
            minimumValue={0}
            maximumValue={10}
            onSlidingComplete={this._slideComplete}/> 

          <Text style={styles.t1}>Réésayez, toujours sur la ligne violette, mais cette fois-ci de droite
          à gauche. Essayez plusieurs fois.</Text>
          <Button title={'PAGE SUIVANTE ->'} onPress={this._nextPage} />
        </View>

      )}
    }
  }


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 105,
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

  t3: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
    borderWidth: 1,
    marginBottom: 40,
    marginRight: 300
  },

  homebutton: {
    marginLeft: 550
  }
  
});

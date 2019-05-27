import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import Differents_Types_Touchers from '../Components/Differents_Types_Touchers'

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
    setTimeout(() => {this.setState({timePassed: true})}, 1000);
    if (this.state.timePassed == false){
    return (

      <View style={styles.container}>

        <Differents_Types_Touchers/>

        <Text style={styles.t3} >Sur une tablette il existe plusieurs types de touchers : le toucher court,
        le toucher long, le glisser, le zoom, etc...</Text>

      </View>

    );}else{

    return(

      <View style={styles.container}>

        <Differents_Types_Touchers/>
        
        <Text style={styles.t1} >Sur une tablette il existe plusieurs types de touchers : le toucher court,
        le toucher long, le glisser, le zoom, etc...</Text>

        <View style={styles.v1} >
          <Text style={styles.t2} >Appuyer sur ce bouton pour accéder à la page suivante.</Text>
          <Image style={styles.img} source={require('../Images/fleche2.png')}/>
          <Button style={styles.b1} title={'PAGE SUIVANTE ->'} onPress={this._nextPage}/>
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
    alignItems: 'center'
  },

  t1: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
    borderWidth: 1,
    width: 400,
    marginBottom: 200,
    marginTop: 200
  },

  t2: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
    backgroundColor: '#a9a9a9',
    width: 400,
  },

  t3: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
    borderWidth: 1,
    width: 400,
    marginBottom: 309,
    marginTop: 350
  },

  v1: {
    flexDirection:'row',
    marginBottom: 183
  },
  
  img: {
    marginTop: 27
  }

});

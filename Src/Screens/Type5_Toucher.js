import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import Differents_Types_Touchers from '../Components/Differents_Types_Touchers';

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
    setTimeout(() => {this.setState({timePassed: true})}, 2000);
    if (this.state.timePassed == false){
    return (

      <View style={styles.container3}>

      <Differents_Types_Touchers/>

      <View style={styles.container2}>
        <View style={styles.v1} >
          <Text style={styles.t3} >1- LE TOUCHER COURT</Text>
          <Text style={styles.t2} >Le TOUCHER COURT est assez rapide, il suffit que le doigt entre en contact
          avec l'écran pour que le toucher soit prise en compte par la tablette. Le doigt
          ne doit pas toucher l'écran pendant plus de 5 secondes</Text>
          <Text style={styles.t2} >C'est l'interaction avec l'écran la plus répandu. S'il n'est pas spécifié
          quoi que ce soit, le toucher doit être COURT.</Text>
        </View>

        <View style={styles.t2} >
          <Button title={'PAGE SUIVANTE ->'} onPress={this._nextPage}/>
        </View>
      </View>
      </View>

    );}else{
      return(

        <View style={styles.container3}>

          <Differents_Types_Touchers/>

          <View style={styles.container}>

            <View style={styles.v1}>
              <Text style={styles.t3}>1- LE TOUCHER COURT</Text>
              <Text style={styles.t2}>Le TOUCHER COURT est assez rapide, il suffit que le doigt entre en contact
              avec l'écran pour que le toucher soit prise en compte par la tablette. Le doigt
              ne doit pas toucher l'écran pendant plus de 5 secondes</Text>
              <Text style={styles.t2}>C'est l'interaction avec l'écran la plus répandu. S'il n'est pas spécifié
              quoi que ce soit, le toucher doit être COURT.</Text>
            </View>
            
            <View style={styles.v2}>
              <Text style={styles.t1}>Appuyer sur ce bouton pour accéder à la page suivante.</Text>
              <Image style={styles.img} source ={require('../Images/fleche3.png')}/>
              <Button title={'PAGE SUIVANTE ->'} onPress={this._nextPage}/>
            </View>
            
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
    flexDirection: 'row',
  },

  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  t1: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
    backgroundColor: '#a9a9a9'
  },

  t2: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
    borderWidth: 1,
    borderColor: 'grey',
  },

  t3: {
    fontSize: 40,
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginBottom: 40,
  },

  v1: {
    width: 420
  },

  v2: {
    width: 180,

  },

  img: {
    marginLeft: 110
  }
  
});

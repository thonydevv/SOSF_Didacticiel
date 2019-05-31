import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import TDH_Ecran_Tactile from '../Components/TDH_Ecran_Tactile';

//Qu'est ce qu'un écran tactile ? touchableOpacity "Donc lorsque vous souhaitez exécuter une action ..."
export default class Ecran2_Tactile extends React.Component {
  
  //settimeout qui permet de changer automatiquement de page avec un timehandler
  //qui permettra de cleartimeout
  componentDidMount = () => {
    this.timerHandle = setTimeout(() => {
      this.props.navigation.navigate('Ecran3_Tactile');
      this.timerHandle = 0; 
      }, 4000);
  }

  //cleartimeout sinon quand on clique sur le homebutton il continue le settimeout
  componentWillUnmount = () => {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
  }
};

  render() {
    return (

      <View style={styles.container}>
        <TDH_Ecran_Tactile/>
        <TouchableOpacity style={styles.homebutton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={require('../Images/home_button.png')} />
        </TouchableOpacity>
        <Text style={styles.t1} >Donc lorsque vous souhaitez exécuter une action avec la tablette, il suffit de toucher le mot, ou le signe correspondant à l'action</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  t1: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
    borderWidth: 1,
    borderColor: '#a9a9a9',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 300,
    marginBottom: 310,
  },

  homebutton: {
    marginLeft: 550
  }
  
});

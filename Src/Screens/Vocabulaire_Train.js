import React from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import Draggable from 'react-native-draggable';

import TDH_Vocabulaire_De_Base from '../Components/TDH_Vocabulaire_De_Base';

// Vocabulaire de base : Entrainement premier screen...
export default class Vocabulaire_Train extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Vocabulaire_Train2')
  }

  render() {
    return (

      <View style={styles.container}>

        <TDH_Vocabulaire_De_Base/>

        <TouchableOpacity style={styles.homebutton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={require('../Images/home_button.png')} />
        </TouchableOpacity>

        <Text>Avant de passer à la partie suivante, exerçons-nous un peu !</Text>
        <Text>Sur l'écran à gauche, replacez les mots en rouge dans les cadres 
        correspondants. Pour cela, touchez le mot choisi, et glissez-le jusqu'au
        cadre choisi</Text>

        <Image source={require('../Images/desktop_tablet.jpg')}/>

        <Draggable renderSize={56} renderColor='black' offsetX={0}  offsetY={600} renderText="ECRAN D'ACCUEIL" pressDrag={()=>alert('touched!!')}/> 
        <Draggable renderSize={56} renderColor='black' offsetX={100} offsetY={600} renderText='ICONE' pressDrag={()=>alert('touched!!')}/> 
        <Draggable renderSize={56} renderColor='black' offsetX={200} offsetY={600} renderText='INTERNET' pressDrag={()=>alert('touched!!')}/>
        <Draggable renderSize={56} renderColor='black' offsetX={-200}  offsetY={450} renderText="GLISSER ICI !" pressDrag={()=>alert('touched!!')}/> 
        <Draggable renderSize={56} renderColor='black' offsetX={0} offsetY={450} renderText='GLISSER ICI !' pressDrag={()=>alert('touched!!')}/> 
        <Draggable renderSize={56} renderColor='black' offsetX={200} offsetY={450} renderText='GLISSER ICI !' pressDrag={()=>alert('touched!!')}/>
        <Button title={'PAGE SUIVANTE ->'} onPress={this._nextPage} />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -300,
  },

  homebutton: {
    marginLeft: 550
  }

});

import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';

import TDH_Vocabulaire_De_Base from '../Components/TDH_Vocabulaire_De_Base';

// Vocabulaire de base : Exemples d'icones...
export default class Vocabulaire_Icones2 extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Menu_2');
  }

  render() {
    return (

      <View style={styles.container}>
        <TDH_Vocabulaire_De_Base/>

        <TouchableOpacity style={styles.homebutton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={require('../Images/home_button.png')} />
        </TouchableOpacity>

        <Text style={styles.t0}>Quelques exemples d'applications avec leurs icônes</Text>

        <View style={styles.container3}>
          <View style={styles.container2}>
            <Text style={styles.t2}>Icône</Text>
            <Text style={styles.t2}>Nom de l'application</Text>
            <Text style={styles.t2}>Fonction</Text>
          </View>

          <View style={styles.container2}>
            <Image style={styles.img1} source={require('../Images/camera.jpg')}/>
            <Text style={styles.t1}>Caméra</Text>
            <Text style={styles.t2}>Appareil photo</Text>
          </View>
          
          <View style={styles.container2}>
            <Image style={styles.img2} source={require('../Images/calendrier.png')}/>
            <Text style={styles.t3}>Calendrier</Text>
            <Text style={styles.t4}>Agenda, calendrier</Text>
          </View>

          <View style={styles.container2}>
            <Image style={styles.img3} source={require('../Images/internet.jpg')}/>
            <Text style={styles.t5}>Internet</Text>
            <Text style={styles.t6}>Faire des recherches, aller {'\n'} sur des sites internet</Text>
          </View>

          <View style={styles.container2}>
            <Image style={styles.img4} source={require('../Images/youtube.png')}/>
            <Text style={styles.t7}>YouTube</Text>
            <Text style={styles.t8}>Visionnage de vidéos {'\n'} et de musiques</Text>
          </View>

          <View style={styles.container2}>
            <Image style={styles.img5} source={require('../Images/calculatrice.jpg')}/>
            <Text style={styles.t9}>Calculatrice</Text>
            <Text style={styles.t10}>Calculatrice</Text>
          </View>

          <View style={styles.container2}>
            <Image style={styles.img6} source={require('../Images/gmail.png')}/>
            <Text style={styles.t11}>Gmail</Text>
            <Text style={styles.t12}>Messagerie éléctronique</Text>
          </View>
        </View>

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
    marginBottom: 210
  },

  container2: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    marginLeft: 40,
    marginRight: 40,
  },

  container3: {
    flexDirection: 'column'
  },

  t0: {
    fontSize: 35,
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 50,
    marginLeft: 30
  },

  t1: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Roboto',
    marginLeft: 5,
    marginRight: 30,
    fontWeight: 'bold',
  },

  t2: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Roboto',
    marginLeft: 20,
  },

  t3: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Roboto',
    marginLeft: 5,
    marginRight: 15,
    fontWeight: 'bold'
  },

  t4: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Roboto',
    marginLeft: 20,
  },

  t5: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Roboto',
    marginLeft: 5,
    fontWeight: 'bold'
  },  

  t6: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Roboto',
    marginLeft: 25,
  },  

  t7: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Roboto',
    marginLeft: 5,
    marginRight: 20,
    fontWeight: 'bold'
  },  

  t8: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Roboto',
    marginLeft: 30,
  },  

  t9: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Roboto',
    marginLeft: 5,
    marginRight: 20,
    fontWeight: 'bold'
  },  

  t10: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Roboto',
    marginLeft: 30,
  },  

  t11: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Roboto',
    marginLeft: 5,
    marginRight: 20,
    fontWeight: 'bold'
  },  

  t12: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Roboto',
    marginLeft: 20,

  },

  img1: {

  },

  img2: {

  },

  img3: {

  },

  img4: {

  },

  img5: {

  },

  img6: {

  },

  homebutton: {
    marginLeft: 550
  },

});

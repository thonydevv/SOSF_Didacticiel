import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';

import TDH_Internet_Connexion_Wifi from '../Components/TDH_Internet_Connexion_Wifi';

//Les différentes utilités d'Internet first screen..."
export default class Internet extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      timePassed: false,
      timePassed1: false,
      timePassed2: false,
      timePassed3: false,
      timePassed4: false,
      timePassed5: false,
      timePassed6: false,
      timePassed7: false,
      timePassed8: false
    };
  }

  _nextPage = () => {
    this.props.navigation.navigate('Internet2');
  }

  render() {
    setTimeout(() => {this.setState({timePassed: true})}, 1000);
    setTimeout(() => {this.setState({timePassed1: true})}, 1000);
    setTimeout(() => {this.setState({timePassed2: true})}, 1000);
    setTimeout(() => {this.setState({timePassed3: true})}, 1000);
    setTimeout(() => {this.setState({timePassed4: true})}, 1000);
    setTimeout(() => {this.setState({timePassed5: true})}, 1000);

    return (

      <View style={styles.container}>

        <TDH_Internet_Connexion_Wifi/>

        <TouchableOpacity style={styles.homebutton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={require('../Images/home_button.png')} />
        </TouchableOpacity>

        <Text style={styles.t1}>INTERNET a diverses utilités, et notamment, il sert à:</Text>
        {this.state.timePassed == true ? (<Text style={styles.t2}>Communiquer avec ses proches</Text>) : null}
        {this.state.timePassed1 == true ? (<Text style={styles.t3}>Faire des achats</Text>) : null}
        {this.state.timePassed2 == true ? (<Text style={styles.t4}>Consulter l'actualité</Text>) : null}
        {this.state.timePassed3 == true ? (<Text style={styles.t5}>Ecouter de la musique</Text>) : null}
        {this.state.timePassed4 == true ? (<Text style={styles.t6}>Réserver ses vacances</Text>) : null}
        {this.state.timePassed5 == true ? (<Text style={styles.t7}>Faire des recherches</Text>) : null}

        <View style={styles.container2}>
          <Button title={'PAGE SUIVANTE ->'} onPress={this._nextPage}/>
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -162
  },

  container2: {
    marginTop: 20
  },

  homebutton: {
    marginLeft: 550
  },

  t1: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
    borderWidth: 1,
    borderColor: '#a9a9a9',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 120,
  },

  t2: {
    fontSize: 30,
    fontFamily: 'Roboto',
    backgroundColor: '#8b008b',
    color: '#fffaf0',
    marginRight: 167,
    marginTop: 20,
  },

  t3: {
    fontSize: 30,
    fontFamily: 'Roboto',
    backgroundColor: '#b22222',
    color: '#fffaf0',
    marginLeft: 378,
    marginTop: 20,
  },

  t4: {
    fontSize: 30,
    fontFamily: 'Roboto',
    backgroundColor: '#7b68ee',
    color: '#fffaf0',
    marginRight: 330,
    marginTop: 20,
  },

  t5: {
    fontSize: 30,
    fontFamily: 'Roboto',
    backgroundColor: '#c71585',
    color: '#fffaf0',
    marginLeft: 300,
    marginTop: 20,
  },

  t6: {
    fontSize: 30,
    fontFamily: 'Roboto',
    backgroundColor: '#3cb371',
    color: '#fffaf0',
    marginRight: 288,
    marginTop: 20,
  },

  t7: {
    fontSize: 30,
    fontFamily: 'Roboto',
    backgroundColor: '#db7093',
    color: '#fffaf0',
    marginRight: 318,
    marginTop: 20,
  },


});

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Indications from '../Components/Indications';
import Texte_Du_Haut from '../Components/Texte_Du_Haut'

//HomeScreen page principale
export default class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Texte_Du_Haut/>
        <Indications/>

        <Text style={styles.t1}>1ère partie</Text>
        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Menu_1')}>
          <Text style={styles.t2}>INTERAGIR AVEC L'ECRAN </Text>
        </TouchableOpacity>

        <Text style={styles.t1}>2ème partie</Text>
        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Menu_2')}>
          <Text style={styles.t2}>LE VOCABULAIRE DE BASE</Text>
        </TouchableOpacity>

        <Text style={styles.t1}>3ème partie</Text>
        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Menu_3')}>
        <Text style={styles.t2}>INTERNET et LA CONNEXION WIFI </Text>
        </TouchableOpacity>
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
});

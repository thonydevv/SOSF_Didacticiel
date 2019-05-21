import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Texte_Du_Haut from '../Components/Texte_Du_Haut';
import Indications from '../Components/Indications';

//Menu 2
export default class Menu_2 extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Texte_Du_Haut/>
        <Indications/>
        <Text>2ème partie</Text>
        <Text>LE VOCABULAIRE DE BASE</Text>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Vocabulaire_Ecran_Accueil')} >
          <Text>L'ECRAN D'ACCUEIL</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Vocabulaire_Applications')} >
          <Text>LES APPLICATIONS</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Vocabulaire_Icones')} >
          <Text>LES ICONES</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Vocabulaire_Menu')} >
          <Text>LE MENU</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Vocabulaire_Internet')} >
          <Text>INTERNET</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Vocabulaire_Train')} >
          <Text>EXERCER-VOUS</Text>
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

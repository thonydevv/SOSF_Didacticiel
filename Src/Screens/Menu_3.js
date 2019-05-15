import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Texte_Du_Haut from '../Components/Texte_Du_Haut';
import Indications from '../Components/Indications';

//Menu 3
export default class Menu_3 extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Texte_Du_Haut/>
        <Indications/>
        <Text>3ème partie</Text>
        <Text>INTERNET ET LA CONNEXION WIFI</Text>

        <TouchableOpacity>
          <Text>Les différentes utilités d'Internet</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Comment obtenir une connexion sur sa tablette ?</Text>
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

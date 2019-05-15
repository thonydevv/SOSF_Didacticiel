import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Texte_Du_Haut from '../Components/Texte_Du_Haut';
import Indications from '../Components/Indications';

//Menu 1
export default class Menu_1 extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Texte_Du_Haut/>
        <Indications/>
        <Text>1ère partie</Text>
        <Text>INTERAGIR AVEC L'ECRAN </Text>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Ecran_Tactile')}>
          <Text>Qu'est-ce qu'un écran tactile</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>LE TOUCHER COURT</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text>LE TOUCHER LONG</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>LE GLISSER</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>LE ZOOM</Text>
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

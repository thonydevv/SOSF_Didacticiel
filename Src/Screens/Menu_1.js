import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';

import Texte_Du_Haut from '../Components/Texte_Du_Haut';
import Indications from '../Components/Indications';

//Menu 1
export default class Menu_1 extends React.Component {

  _previousPage = () => {
    this.props.navigation.navigate('HomeScreen');
  }

  render() {

    return (
      <View style={styles.container}>
        <Texte_Du_Haut/>
        <Indications/>
        <Text>1ère partie</Text>
        <Text>INTERAGIR AVEC L'ECRAN </Text>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Ecran1_Tactile')}>
          <Text>Qu'est-ce qu'un écran tactile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Type4_Toucher')}>
          <Text>LE TOUCHER COURT</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Type7_Toucher')} >
          <Text>LE TOUCHER LONG</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Le_Glisser')} >
          <Text>LE GLISSER</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Le_Zoom')} >
          <Text>LE ZOOM</Text>
        </TouchableOpacity>
        <Button title={'REVENIR SUR LA PAGE PRINCIPALE'} onPress={this._previousPage} />
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

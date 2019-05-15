import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

//Ecran Tactile
export default class Ecran_Tactile extends React.Component {
  constructor(){
    super()
    const img1 = require('../Images/Red_Circle(small).png');
  }
  _showImageFunc = () => {
    alert('HELLO WORLD');
  }

  render() {

    return (
      <TouchableOpacity style={styles.container} onPress={this._showImageFunc}>
        <Text>
          Qu'est ce qu'un écran tactile ?
        </Text>

        <Text>C'est un écran avec lequel on intéragit par le toucher.
        Tout l'écran est TACTILE. Si vous le touchez, il va "réagir".
        </Text>

        <Text>Essayez ! Touchez l'écran où vous voulez et regardez ce qu'il se passe... .
        </Text>

        <Text>
          Essayez au moins 5 fois à des endroits différents de l'écran.
        </Text>
      </TouchableOpacity>
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

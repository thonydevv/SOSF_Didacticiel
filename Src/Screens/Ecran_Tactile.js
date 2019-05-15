import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

//Ecran Tactile
export default class Ecran_Tactile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }
  _showHiddenImg = () => {
    this.setState({show: !this.state.show})
    if (this.state.show === true) {
      return(
      <Image source = {require('../Images/Red_Circle(small).png')}/>)
    }else{
      return
    }
  }

  render() {
    console.log(this.state.show)
    return (
      <TouchableOpacity style={styles.container} onPress={this._showHiddenImg}>
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

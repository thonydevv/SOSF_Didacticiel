import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

//"Qu'est ce qu'un écran tactile ?" touchableOpacity
export default class Ecran1_Tactile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      opacity: 0,
      click: 0,
    }  
  }

  _opacityShow = () => {
    this.setState({opacity: 100})
    setTimeout(() => {
      this.setState({opacity: 0});
      }, 800);
  }

  _countClick = () => {
    this.setState({click: this.state.click + 1});
    if (this.state.click === 4){
      this.setState({click: 0})
    }
  }

  _displayScreen = () => {
    if(this.state.click === 4){
      this.props.navigation.navigate('Ecran2_Tactile')
    }
  }

  _combinedFunctions = () => {
    this._opacityShow();
    this._countClick();
    this._displayScreen();
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this._combinedFunctions}>
      <Image style={{opacity: this.state.opacity}} source={require('../Images/Red_Circle(small).png')}/>
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

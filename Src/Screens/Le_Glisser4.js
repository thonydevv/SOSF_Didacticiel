import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Slider from '@react-native-community/slider';

//Ecran Le_Glisser4 "Encore une fois de gauche à droite !..."
export default class Le_Glisser4 extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      slideDone: false
    };
  }

  _nextPage = () => {
    this.props.navigation.navigate('Le_Glisser5');
  }

  _slideComplete = () => {
    this.setState({slideDone: true})
  }

  render() {
    if (this.state.slideDone == false){
    return (
      <View style={styles.container}>
        <Text>3- LE GLISSER</Text>
        <Text>Essayons le glisser !</Text>
        <Text>Encore une fois de gauche à droite !</Text>
        <Slider style={{width: 200, height: 100}} 
          minimumValue={0}
          maximumValue={10}
          onSlidingComplete={this._slideComplete}
        /> 
        <Text>Encore une fois de gauche à droite !</Text>
      </View>
    );}else{
      return (      
        <View style={styles.container}>
        <Text>3- LE GLISSER</Text>
        <Text>Essayons le glisser !</Text>
        <Text>Faites glisser, avec votre doigt, délicatement et sans le relever
        de l'écran, le rond violet le long de la ligne grise ci_dessous, de gauche à
        droite. Relevez le doigt au bout de la ligne. Essayez plusieurs fois</Text>
        <Slider style={{width: 200, height: 100}} 
          minimumValue={0}
          maximumValue={10}
          onSlidingComplete={this._slideComplete}
        /> 
        <Text>Réésayez, toujours sur la ligne violette, mais cette fois-ci de droite
        à gauche. Essayez plusieurs fois.</Text>
        <Button title={'PAGE SUIVANTE ->'} onPress={this._nextPage} />
      </View>
      )}
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

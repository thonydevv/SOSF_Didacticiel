import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Slider from '@react-native-community/slider';

//Ecran Le_Glisser3 "Encore une fois de droite à gauche !..."
export default class Le_Glisser3 extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      slideDone: false
    };
  }

  _nextPage = () => {
    this.props.navigation.navigate('Le_Glisser4');
  }

  _slideComplete = () => {
    this.setState({slideDone: true})
  }

  render() {
    if (this.state.slideDone == false){
    return (
      <View style={styles.container}>
        <Text>3- LE GLISSER</Text>
        <Text>Encore une fois de droite à gauche !</Text>
        <Slider style={{width: 200, height: 100}} 
          minimumValue={-400}
          maximumValue={10}
          onSlidingComplete={this._slideComplete}
        /> 
      </View>
    );}else{
      return(
      <View style={styles.container}>
      <Text>3- LE GLISSER</Text>
      <Text>Encore une fois de droite à gauche !</Text>
      <Slider style={{width: 200, height: 100}} 
        minimumValue={-400}
        maximumValue={10}
        thumbTintColor={'#dc143c'}
        onSlidingComplete={this._slideComplete}
      /> 
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

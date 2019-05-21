import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Slider, Button } from 'react-native-elements';

//Ecran Le_Glisser5 "Essayons à présent le GLISSER de bas en haut..."
export default class Le_Glisser5 extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      slideDone: false
    };
  }

  _nextPage = () => {
    this.props.navigation.navigate('Type_Toucher_Bravo');
  }

  _slideComplete = () => {
    this.setState({slideDone: true})
  }

  render() {
    if (this.state.slideDone == false){
    return (
      <View style={styles.container}>
        <Text>3- LE GLISSER</Text>
        <Text>Essayons à présent le GLISSER de bas en haut, et de haut en bas, pour
        circuler sur une page. Pour lire le poème ci-dessous, il vous faut glisser
        dessus, dans le sens des flêches. Essayez !</Text>
        <Image source={require('../Images/long-arrow-down.png')}/>
        <Slider style={{width: 300, height: 200}}
          orientation={"vertical"}
          onSlidingComplete={this._slideComplete}
        />
        <Image source={require('../Images/long-arrow-up.png')}/>
      </View>
    );}else{
      return(
      <View style={styles.container}>
      <Text>3- LE GLISSER</Text>
      <Text>Essayons à présent le GLISSER de bas en haut, et de haut en bas, pour
      circuler sur une page. Pour lire le poème ci-dessous, il vous faut glisser
      dessus, dans le sens des flêches. Essayez !</Text>
      <Image source={require('../Images/long-arrow-down.png')}/>
      <Slider style={{width: 300, height: 200}}
        orientation={"vertical"}
      />
      <Image source={require('../Images/long-arrow-up.png')}/>
      <Button title={"PAGE SUIVANTE ->"} onPress={this._nextPage} />
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

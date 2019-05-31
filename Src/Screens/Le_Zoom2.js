import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Image, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

import Differents_Types_Touchers from '../Components/Differents_Types_Touchers';

//Ecran Le_Zoom2 "Zoom In..."
export default class Le_Zoom1 extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      timePassed: false,
      timePassed1: false,
      timePassed2: false,
    };
  }

  _nextPage = () => {
    this.props.navigation.navigate('Le_Zoom3');
  }

  render() {

    setTimeout(() => {this.setState({timePassed: true})}, 1000);
    setTimeout(() => {this.setState({timePassed1: true})}, 2000);
    setTimeout(() => {this.setState({timePassed2: true})}, 3000);

    return (

      <View style={styles.container}>
        <Differents_Types_Touchers/>

        <TouchableOpacity style={styles.homebutton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={require('../Images/home_button.png')} />
        </TouchableOpacity>

        <Text style={styles.t1}>4- LE ZOOM</Text>

        {this.state.timePassed == true ? 
        (<Text style={styles.t2}>1- Sur l'image à droite, posez délicatement votre pouce et votre index
        collés ensemble, sur l'animal que vous souhaitez voir de plus près.</Text>) : null}

        {this.state.timePassed1 == true ? 
        (<Text style={styles.t2}>2- Tout en laissant poser les doigts sur l'écran, écarter le pouce et
        l'index de quelques centimères.</Text>) : null}

        {this.state.timePassed2 == true ? 
        (<Text style={styles.t2}>3- Vous pouvez enlever vos doigts de l'écran. VOUS AVEZ FAIT UN ZOOM !.</Text>) : null}

        <ImageZoom
          imageWidth={200}
          imageHeight={200}>
          <Image style={{width:200, height:200}}
          source={require('../Images/animaux.jpg')} />
        </ImageZoom>

        <Button title={'PAGE SUIVANTE ->'} onPress={this._nextPage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },

  homebutton: {
    marginLeft: 550
  },

  t1: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 100,
    marginRight: 400
  },

  t2: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto',
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#a9a9a9',
    marginBottom: 20
  },

});

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Image, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

//Ecran Le_Zoom2 "Zoom In..."
export default class Le_Zoom1 extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Le_Zoom3');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>4- LE ZOOM</Text>
        <Text>1- Sur l'image à droite, posez délicatement votre pouce et votre index
        collés ensemble, sur l'animal que vous souhaitez voir de plus près.</Text>
        <Text>2- Tout en laissant poser les doigts sur l'écran, écarter le pouce et
        l'index de quelques centimères.</Text>
        <Text>3- Vous pouvez enlever vos doigts de l'écran. VOUS AVEZ FAIT UN ZOOM !.</Text>
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
  },
});

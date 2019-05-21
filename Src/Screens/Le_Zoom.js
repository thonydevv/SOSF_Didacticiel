import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//Ecran Le_Zoom "Le zoom est un geste qui permet d'agrandir ou de se "rapprocher"..."
export default class Le_Zoom extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Le_Zoom1');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>4- LE ZOOM</Text>
        <Text>Le ZOOM est un geste qui permet d'agrandir ou de se "rapprocher"
        d'un élément en particulier sur une image, une photo, ou encore sur
        une page quelconque sur la tablette. Elle requiert un geste avec les deux
        doigts (le pouce et l'index).</Text>
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

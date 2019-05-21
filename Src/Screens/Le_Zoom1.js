import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//Ecran Le_Zoom1 "Il est très important que vous suiviez les consignes sur la page suivant..."
export default class Le_Zoom1 extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Le_Zoom2');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>4- LE ZOOM</Text>
        <Text>Essayons le ZOOM !
        Il est très important que vous suiviez les consignes sur la page suivante,
        dans l'ordre.</Text>
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

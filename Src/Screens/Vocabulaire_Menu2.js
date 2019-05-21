import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

// Vocabulaire de base : Qu'est ce que icônes avec un screen de tablette...
export default class Vocabulaire_Menu2 extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Menu_2');
  }
  render() {

    return (
      <View style={styles.container}>
        <Text>4- LE MENU</Text>
        <Text>Voici un exemple de Menu. Bien sûr, celui-ci est personnalisable
        autant que l'on veut, et dépend des applications que l'on a dans notre
        tablette. Le Menu peut comporter plusieurs pages.</Text>
        <Image source={require('../Images/desktop_tablet.jpg')}/>
        <Text>Les applications</Text>
        <Text>Indication que nous nous trouvons sur la du devant (première page)</Text>
        <Text>2nde page: pour y accéder, glisser vers la gauche.</Text>
        <Button title={'PAGE SUIVANTE ->'} onPress={this._nextPage}/>
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

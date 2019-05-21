import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, Image} from 'react-native';

// Vocabulaire de base : Exemples d'icones...
export default class Vocabulaire_Icones2 extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Menu_2');
  }
  render() {

    return (
      <View style={styles.container}>
        <Text>3- LES ICONES</Text>
        <Text>Quelques exemples d'applications avec leurs icônes</Text>
        <FlatList
        data={[{key: 'Caméra'}, {key: 'Calendrier'}, {key: 'Internet'}, {key: 'YouTube'}, {key: 'Calculatrice'}, {key: 'Gmail'}]}
        renderItem={({item}) => <Text>{item.key}</Text>}
        />
        <FlatList
        data={[{key: 'Appareil photo'}, {key: 'Agenda, calendrier'}, {key: 'Faier des recherches, aller sur des sites internet'}, {key: 'Visionnage de vidéos et de musiques'}, {key: 'Calculatrice'}, {key: 'Messagerie éléctronique'}]}
        renderItem={({item}) => <Text>{item.key}</Text>}
        />
        <Image source={require('../Images/camera.jpg')}/>
        <Image source={require('../Images/calendrier.png')}/>
        <Image source={require('../Images/internet.jpg')}/>
        <Image source={require('../Images/youtube.png')}/>
        <Image source={require('../Images/calculatrice.jpg')}/>
        <Image source={require('../Images/gmail.png')}/>
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

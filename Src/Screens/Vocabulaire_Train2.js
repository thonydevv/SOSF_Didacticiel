import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import Draggable from 'react-native-draggable';

// Vocabulaire de base : Entrainement deuxieme screen...
export default class Vocabulaire_Train2 extends React.Component {

  _nextPage = () => {
    this.props.navigation.navigate('Vocabulaire_Bravo');
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>Et si on s'exercait encore un peu ?</Text>
        <Text>Sur l'écran ci-dessous, replacez les mots en rouge dans les cadres
        correspondants. Pour cela, touchez le mot choisi, glissez-le jusqu'au cadre
        choisi.</Text>
        <Image source={require('../Images/desktop_tablet.jpg')}/>
        <Draggable renderSize={56} renderColor='black' offsetX={0}  offsetY={600} renderText="APPLICATIONS" pressDrag={()=>alert('touched!!')}/> 
        <Draggable renderSize={56} renderColor='black' offsetX={100} offsetY={600} renderText='MENU' pressDrag={()=>alert('touched!!')}/> 
        <Draggable renderSize={56} renderColor='black' offsetX={0} offsetY={450} renderText='GLISSER ICI !' pressDrag={()=>alert('touched!!')}/> 
        <Draggable renderSize={56} renderColor='black' offsetX={200} offsetY={450} renderText='GLISSER ICI !' pressDrag={()=>alert('touched!!')}/>
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
    marginTop: -300,
  },
});

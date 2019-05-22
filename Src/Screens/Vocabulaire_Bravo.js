import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

//Ecran final transition 1 "BRAVO VOUS AVEZ FINI CETTE TACHE"
export default class Vocabulaire_Bravo extends React.Component {

  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Menu_2')
      }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../Images/smiley_souriant.png')}/>
        <Text>BRAVO !</Text>
        <Text>Vous avez réussi cette tâche</Text>
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

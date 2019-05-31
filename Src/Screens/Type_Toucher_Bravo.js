import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

//Ecran final transition 1 "BRAVO VOUS AVEZ FINI CETTE TACHE"
export default class Type_Toucher_Bravo_Toucher extends React.Component {

  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Menu_1')
      }, 3000);
  }

  render() {
    return (

      <View style={styles.container}>
        <Image source={require('../Images/smiley_souriant.png')}/>
        <Text style={styles.t1}>BRAVO !</Text>
        <Text style={styles.t1}>Vous avez réussi cette tâche</Text>
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

  t1: {
    color: '#b8860b',
    fontWeight: 'bold',
    fontSize: 30,
  }

});

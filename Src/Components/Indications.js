import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Indications du haut "TOUCHEZ LA PARTIE QUE VOUS SOUHAITEZ VOIR OU REVOIR"
export default class Indications extends React.Component {
  
  render() {
    return(

      <View style={styles.container} >
        <Text style={styles.texte}>Touchez la partie que vous souhaitez voir ou revoir !</Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    height: 60,
    justifyContent: 'center',
    marginTop: 20
  },

  texte: {
    fontFamily: 'Roboto',
    fontSize: 25,
    color:'black',
    fontWeight: 'bold',
  }
})
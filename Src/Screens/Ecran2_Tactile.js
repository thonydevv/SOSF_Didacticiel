import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Qu'est ce qu'un écran tactile ? touchableOpacity
export default class Ecran2_Tactile extends React.Component {
  
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Ecran3_Tactile')
      }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Donc lorsque vous souhaitez exécuter une action avec la tablette, il suffit de toucher le mot, ou le signe correspondant à l'action</Text>
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

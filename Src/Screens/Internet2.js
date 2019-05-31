import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//Les différentes utilités d'Internet second screen avec schéma..."
export default class Internet2 extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      timePassed: false,
      timePassed1: false,
      timePassed2: false,
      timePassed3: false,
      timePassed4: false,
      timePassed5: false,
      timePassed6: false,
      timePassed7: false,
      timePassed8: false
    };
  }

  _nextPage = () => {
    this.props.navigation.navigate('Menu_3');
  }

  render() {
    setTimeout(() => {this.setState({timePassed: true})}, 1000);
    setTimeout(() => {this.setState({timePassed1: true})}, 1000);
    setTimeout(() => {this.setState({timePassed2: true})}, 1000);
    setTimeout(() => {this.setState({timePassed3: true})}, 1000);
    setTimeout(() => {this.setState({timePassed4: true})}, 1000);
    setTimeout(() => {this.setState({timePassed5: true})}, 1000);
    setTimeout(() => {this.setState({timePassed6: true})}, 1000);
    setTimeout(() => {this.setState({timePassed7: true})}, 1000);
    setTimeout(() => {this.setState({timePassed8: true})}, 1000);

      return (

        <View style={styles.container}>
        {this.state.timePassed == true ? (<Text>INTERNET</Text>) : null}
        {this.state.timePassed1 == true ? (<Text>est capté par : Une BOX INTERNET ou une CLE 4G</Text>) : null}
        {this.state.timePassed2 == true ? (<Text>Leur utilisation nécessite un abonnement mensuel auprès de l'opérateur de votre choix: SFR, Bouygues, Télécom, Orange, Free, etc...</Text>) : null}
        {this.state.timePassed3 == true ? (<Text>qui génèrent un réseau appelé (LOGO WIFI...)</Text>) : null}
        {this.state.timePassed4 == true ? (<Text>TABLETTE</Text>) : null}
        {this.state.timePassed5 == true ? (<Text>TELEPHONE PORTABLE</Text>) : null}
        {this.state.timePassed6 == true ? (<Text>ORDINATEUR</Text>) : null}
        {this.state.timePassed7 == true ? (<Text>Se connectent au réseau WIFI grâce au nom du réseau et à un code de sécurité propre au réseau, fourni par votre opérateur</Text>) : null}
        {this.state.timePassed8 == true ? (<Text>Pour avoir utiliser les applications qui nécessitent une connexion à Internet pour fonctionner. Exemples: -Youtube -Gmail -Hangouts -Internet</Text>) : null}
        <Button title={'PAGE SUIVANTE ->'} onPress={this._nextPage} />
        </View>

      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

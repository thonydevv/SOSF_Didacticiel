import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import Differents_Types_Touchers from '../Components/Differents_Types_Touchers';


//Ecran 7 le TOUCHER LONG...
export default class Type7_Toucher extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      timePassed: false
    };
  }

  _nextPage = () => {
    this.props.navigation.navigate('Type8_Toucher');
  }
  
  render() {
    setTimeout(() => {this.setState({timePassed: true})}, 4000);
    if (this.state.timePassed == false){
      return(

      <View style={styles.container3}>

        <Differents_Types_Touchers/>

        <View style={styles.container2}>

          <View style={styles.v1} >
            <Text style={styles.t3} >1- LE TOUCHER LONG</Text>
            <Text style={styles.t2} >Le TOUCHER LONG est tout aussi délicat que le toucher court, mais le doigt
            doit rester en contact avec l'écran longtemps. Le toucher doit durer en général
            un peu plus d'une seconde.</Text>
            <Text style={styles.t2}>Ce toucher long est moins répandu, et permet en général d'accéder
            à des fonctions inaccessibles avec un toucher court</Text>
          </View>

          <View style={styles.t2} >
            <Button title={'PAGE SUIVANTE ->'} onPress={this._nextPage}/>
          </View>

        </View>
      </View>
      )
      }else{
      return(
      
        <View style={styles.container3}>

          <Differents_Types_Touchers/>

          <View style={styles.container}>

            <View style={styles.v1} >
              <Text style={styles.t3} >1- LE TOUCHER LONG</Text>
              <Text style={styles.t2} >Le TOUCHER LONG est tout aussi délicat que le toucher court, mais le doigt
              doit rester en contact avec l'écran longtemps. Le toucher doit durer en général
              un peu plus d'une seconde.</Text>
              <Text style={styles.t2} >Ce toucher long est moins répandu, et permet en général d'accéder
              à des fonctions inaccessibles avec un toucher court</Text>
            </View>

            <View style={styles.v2} >
              <Text style={styles.t1} >TOUCHER COURT sur ce bouton pour accéder à la page suivante.</Text>
              <Image style={styles.img} source ={require('../Images/fleche3.png')}/>
              <Button title={'PAGE SUIVANTE ->'} onPress={this._nextPage}/>
            </View>

          </View>
        </View>
      )
      }
      }
      }
      
      const styles = StyleSheet.create({
      container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      },
      
      container2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      },
      
      container3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      },
      
      t1: {
      fontSize: 30,
      color: 'black',
      fontFamily: 'Roboto',
      backgroundColor: '#a9a9a9'
      },
      
      t2: {
      fontSize: 30,
      color: 'black',
      fontFamily: 'Roboto',
      borderWidth: 1,
      borderColor: 'grey',
      },
      
      t3: {
      fontSize: 40,
      color: 'black',
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      marginBottom: 40,
      },
      
      v1: {
      width: 420
      },
      
      v2: {
      width: 180,
      
      },
      
      img: {
      marginLeft: 110
      }
      
      });
      


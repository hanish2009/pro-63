import * as React from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements'


export default class App extends React.Component {
  constructor(){

super()
this.state = {
  text:"",
  displayText:'',
}

  }
  render() {
    return (
      <View style={styles.container}>
      <Header 
      backgroundColor = {"red"}
      centerComponent = {{text:"Dictionary",style:{color:"Black",fontSize:25 
      }}
      }
      
      leftComponent = {{icon:'menu'}}
      rightComponent = {{icon:"Bell"}}
      />

<TextInput
style = {styles.inputBox} 
onChangeText = {(text) => {
  this.setState({text:text})
}}
value = {this.state.text}/>
  
  <TouchableOpacity 
  style = {styles.goButton}
  onPress = {()=>{this.setState({displayText:this.state.text})  }}
  >
  <Text style = {styles.buttonText}>GO</Text>
  </TouchableOpacity>  
  <Text style = {styles.displayText}>{this.state.displayText}</Text>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  inputBox:{
    marginTop:150,
    width:'90%',
    allignSelf:'center',
    height:50,
    borderWidth:5,
    outline:'none',
    textAlign:'center', 
    },

    goButton:{

      width:'50%',
      height:55,
      margin:10,
      padding:10,
      allignSelf:'center',

    },

    buttonText:{
      textAlign:'center',
      fontSize:30,
      fontWeight:"bold",
      
    },

    displayText:{
    textAlign:'center',
    fontSize:30
    }



});

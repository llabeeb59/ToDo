import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    inputfield: {
        padding: 20
    }
})

export default class Input extends Component {
    state = {
        text: ''
    }
    
   onChangetext = (text) => {
       this.setState({text})
   }
   
   onSubmitEditing = () => {
       const {onSubmit} = this.props
       const {text} = this.state
       
       if(!text) return
       
       onSubmit(text)
       this.setState({text: ''})
   }
   
   render(){
       const {placeholder} = this.props
       
        return (
            <TextInput
                style={styles.inputfield}
                placeholder={placeholder}
                onChangeText={this.onChangeText}
                onSubmitEditing={this.onSubmitEditing}
                blurOnSubmit={false}
            />
        )
   }
}
        
        
        
            
    
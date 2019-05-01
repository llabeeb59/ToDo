import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
        header: {
            backgroundColor: 'skyblue',
        },
        title: {
            paddingVertical: 20,
            textAlign: 'center',
            color: 'white',
            fontSize: 20
        }
    })

export default class Title extends Component {
    
    render() {
        const {children} = this.props
        
        return (
            <View style = {styles.header}>
                <Text style = {styles.title}>{children}</Text>
            </View>
        )
        
    }
} 
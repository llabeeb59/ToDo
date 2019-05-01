import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footer: {
        paddingVertical: 15,
        textAlign: 'center',
        color: 'darkred',
        fontSize: 22
    }
})

export default class Footer extends Component {
    
    
    render() {
        const {children} = this.props
        
        return(
            <TouchableOpacity style={styles.container}>
                <Text style={styles.footer}>{children}</Text>
            </TouchableOpacity>
        )
    }
}
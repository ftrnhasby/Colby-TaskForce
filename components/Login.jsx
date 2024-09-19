import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';


export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily:'outfit-bold', fontSize:30, textAlign:'center', color: Colors.Primary }}>ColBy</Text>
            <Text style={{ textAlign: 'center', fontFamily: 'outfit', fontSize:25 }}>Make your colaboration easier</Text>
            <Image source={require('../assets/images/Shared-goals.png')} style={{ 
                width: '100%',
                height: 325,
             }}/>
            
            <View style={styles.containerAction}>
            <View style={styles.signin}>
                <Text style={{ color: Colors.White, textAlign: 'center', fontFamily: 'outfit' }}>Sign In</Text>
            </View>
            
            <View style={styles.signup}>
                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'outfit' }}>Sign Up</Text>
            </View>
            
            <View style={styles.googleContainer}>
                <Image source={require('../assets/images/google.png')} style={{ 
                    width: '8%',
                    height: 30,
                 }}/>
                <Image source={require('../assets/images/instagram.png')} style={{ 
                    width: '8%',
                    height: 30,
                 }}/>
            </View>
            </View>

            

            </View>
    )
}

const styles = StyleSheet.create({
    signin: {
        backgroundColor: Colors.Primary,
        padding: 15,
        borderRadius: 20,
        marginTop: '20%'
    },
    signup: {
        borderWidth: 1,
        padding: 15,
        borderRadius: 20,
    },
    container: {
        flex:1,
        marginTop: '55%',
        justifyContent: 'center',
        padding:30,
        height: '100%',
        gap: 15
    },
    containerAction: {
        backgroundColor: '#ffff',
        height: '100%',
        padding: 15,
        marginTop:'10%',
        gap: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderWidth: 1,
    },
    googleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        padding: 10,
        display: 'flex',
        flexDirection: 'row'

    }
})
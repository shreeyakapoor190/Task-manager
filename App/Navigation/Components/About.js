import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.head}>Hey there!</Text>
            <Text style={styles.para}>This is my first React Native Application.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#caf0f8',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    head: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 70,
        marginHorizontal: 30,
    },
    para: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 30,
        marginHorizontal: 30,
    }
});
export default About;
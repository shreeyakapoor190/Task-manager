import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Home = () => {
    return (

        < View style={styles.container} >
            <View View style={styles.tasksWrapper} >
                <Text style={styles.sectionTitle}>Task Manager 🎯
                </Text>
            </View >

            <View style={styles.img}>
                <Image source={require('../images/To-do.jpg')} />
            </View>
            <View>
                <Text style={styles.para}>Manage your daily tasks effectively!
                </Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#caf0f8',
        paddingHorizontal: 20,
        paddingTop: 20,


    },

    img: {
        marginHorizontal: 23,
        marginTop: 60,
        borderBottomColor: '#c9184a',
        borderBottomWidth: 5,
        paddingBottom: 2,
        borderRadius: 10,
        borderRightWidth: 4,
        borderRightColor: '#c9184a',
        // paddingRight: 320,
        borderTopEndRadius: 7,
        borderBottomEndRadius: 5,
    },
    sectionTitle: {
        fontSize: 35,
        color: '#c9184a',
        fontWeight: 'bold',
        borderBottomColor: '#c9184a',
        borderBottomWidth: 5,
        textAlign: 'center',
        paddingBottom: 8,
        backgroundColor: '#ffccd5',
        borderRadius: 10,
        marginTop: 40,
        borderRightWidth: 4,
        borderRightColor: '#c9184a',
        // paddingRight: 3,
        marginHorizontal: 30,
    },
    para: {
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
        color: '#c9184a',
    },

})

export default Home;
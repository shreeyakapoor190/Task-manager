import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AddTask = () => {
    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Tasks To Be Done</Text>
                <View style={styles.items}>
                    <Text>Task 1</Text>
                    <Text>Task 2</Text>
                </View>
            </View>
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
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {


    },

})
export default AddTask;
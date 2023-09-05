import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';


const Home = ({navigation}) => {
    return (
        <SafeAreaView className="flex h-full bg-orange-50">
            <View>
                <Text className="">Home</Text>
            </View>
            <TouchableOpacity className="bg-orange-600 rounded-full p-4" onPress={() => navigation.navigate("AddContact")} style={styles.buttonAdd}>
                <View >
                    <Ionicons name='add' size={28} color="white" />
                </View> 
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    buttonAdd: {
        position: 'absolute',
        bottom: 25,
        right: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.65,

        elevation: 10,
    }
})
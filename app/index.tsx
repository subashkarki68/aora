import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'

const Home = () => {
    return (
        <View className='flex flex-1 justify-center items-center'>
            <Text className='text-4xl text-red-400'>Aora!!</Text>
            <StatusBar style='auto' />
            <Link href="/profile" className='text-2xl text-blue-400 underline'>Profile</Link>
        </View>
    )
}

export default Home
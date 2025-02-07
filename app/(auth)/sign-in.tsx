import { images } from '@/constants'
import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from "@/app/components/FormField"

const SignIn = () => {
    return (
        <SafeAreaView className='h-full bg-primary'>
            <ScrollView>
                <View className='justify-center items-center px-4 my-6 w-full h-full'>
                    <Image
                        source={images.logo}
                        resizeMode='contain'
                        className='w-[115px] h-[35px]'
                    />
                    <Text className='mt-10 text-2xl text-white font-psemibold'>Log in to Aora</Text>
                    <FormField />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn
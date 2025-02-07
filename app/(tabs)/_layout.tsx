import { icons } from "@/constants"
import { Tabs } from "expo-router"
import { FC } from "react"
import { Image, ImageSourcePropType, Text, View } from "react-native"

interface TabIconPrps {
    icon: ImageSourcePropType
    color: string
    name: string
    focused: boolean
}

const TabIcon: FC<TabIconPrps> = ({ icon, color, name, focused }) => {
    return (
        <View className="gap-2 justify-center items-center pt-6">
            <Image
                source={icon} resizeMode="contain" tintColor={color} className="size-6" />
            <Text
                className={`${focused ? 'font-psemibold' : 'font-prefular'} line-clamp-1 text-xs tracking-tighter`}
                style={{ color: color }}
            >
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
    return (
        <>
            <Tabs screenOptions={
                {
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#FFA001",
                    tabBarInactiveTintColor: "#CDCDE0",
                    tabBarStyle: {
                        backgroundColor: '#161622',
                        borderTopWidth: 1,
                        borderTopColor: '#232533',
                        height: 84
                    }
                }
            }>
                <Tabs.Screen name='home' options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon color={color} icon={icons.home} name="Home" focused={focused} />
                    )
                }} />
                <Tabs.Screen name='bookmark' options={{
                    title: "Bookmark",
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon color={color} icon={icons.bookmark} name="Bookmark" focused={focused} />
                    )
                }} />
                <Tabs.Screen name='create' options={{
                    title: "Create",
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon color={color} icon={icons.plus} name="Create" focused={focused} />
                    )
                }} />
                <Tabs.Screen name='profile' options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon color={color} icon={icons.profile} name="Profile" focused={focused} />
                    )
                }} />
            </Tabs>
        </>
    )
}

export default TabsLayout
import Button from "@/components/Button";
import { images } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProvider";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { isLoading, isLoggedIn } = useGlobalContext();
  if (!isLoading && isLoggedIn) return <Redirect href={"/home"} />;

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        {!isLoading && (
          <View className="justify-center min-h-[85vh] items-center px-4 w-full">
            <Image
              source={images.logo}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
            />
            <Image
              source={images.cards}
              className="max-w-[380px] w-full h-[300px] lg:max-h-[400px]"
              resizeMode="contain"
            />
            <View className="mt-5">
              <Text className="text-3xl font-bold text-center text-white">
                Discover Endless Possibilities With &nbsp;
                <Text className="text-secondary-200">Aora</Text>
              </Text>
              <Text className="mt-7 text-sm text-center text-gray-100 font-pregular">
                Where creativity meets innovation: embark on a journey of
                limitless exploration with Aora
              </Text>
              <Button
                text="Continue with Email"
                handlePress={() => router.push("/sign-in")}
                style={{
                  marginTop: 40,
                }}
                textStyles="text-center"
              />
            </View>
          </View>
        )}
      </ScrollView>
      <StatusBar
        backgroundColor="#161622"
        style="light"
        hidden={false}
        translucent
      />
    </SafeAreaView>
  );
};

export default Home;

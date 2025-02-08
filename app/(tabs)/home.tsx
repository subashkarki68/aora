import { useGlobalContext } from "@/context/GlobalProvider";
import React from "react";
import { SafeAreaView, Text } from "react-native";

const Home = () => {
  const { user } = useGlobalContext();
  return (
    <SafeAreaView>
      <Text>{user?.name}</Text>
    </SafeAreaView>
  );
};

export default Home;

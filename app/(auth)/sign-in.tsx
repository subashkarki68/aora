import { images } from "@/constants";
import React, { FC, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import { UserSignIn } from "@/types/user";

type SignInProps = UserSignIn & {
  onSignIn: () => void;
};

const SignIn: FC<SignInProps> = () => {
  const [form, setForm] = useState<UserSignIn>({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View className="justify-center items-center px-4 my-6 w-full h-full">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="mt-10 text-2xl text-white font-psemibold">
            Log in to Aora
          </Text>
          <View className="mt-10 w-4/5 md:w-3/5 lg:w-2/5">
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(email) => setForm({ ...form, email })}
              className="mt-7"
              keyboardType="email-address"
              placeholder="Enter your Email"
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(password) => setForm({ ...form, password })}
              className="mt-7"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

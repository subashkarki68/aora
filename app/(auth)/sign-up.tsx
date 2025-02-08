import { images } from "@/constants";
import React, { FC, useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import { UserSignIn, UserSignUp } from "@/types/user";
import Button from "@/components/Button";
import { Link, router } from "expo-router";
import { createUser } from "@/services/user.service";
import { AppwriteException } from "react-native-appwrite";
import { useGlobalContext } from "@/context/GlobalProvider";

type SignUpProps = UserSignUp & {
  //   onSignIn: () => void;
};

const SignUp: FC<SignUpProps> = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [form, setForm] = useState<UserSignUp>({
    name: "",
    email: "",
    password: "",
  });
  const { setUser, setIsLoggedIn } = useGlobalContext();

  const submit = async () => {
    const { email, password } = form;
    if (!email || !password) {
      Alert.alert("Error", "Please fill all fields");
    }
    setIsSubmitting(true);
    try {
      const result = await createUser(form);
      if (result?.$id) {
        setUser(result);
        setIsLoggedIn(true);
        router.replace("/home");
      }
    } catch (error) {
      if (error instanceof AppwriteException) {
        Alert.alert("Error Occured: ", JSON.stringify(error.message));
      }
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View className="justify-center min-h-[85vh] items-center px-4 my-6 w-full h-full">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="mt-10 text-2xl text-white font-psemibold">
            Signup
          </Text>
          <View className="gap-6 w-4/5 md:w-3/5 lg:w-2/5">
            <FormField
              title="Name"
              value={form.name}
              handleChangeText={(name) => setForm({ ...form, name })}
              placeholder="Enter your Name"
            />
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(email) => setForm({ ...form, email })}
              keyboardType="email-address"
              placeholder="Enter your Email"
            />
            <FormField
              title="Password"
              value={form.password}
              className="mb-6"
              handleChangeText={(password) => setForm({ ...form, password })}
            />
            <Button
              text="Sign Up"
              handlePress={submit}
              isLoading={isSubmitting}
            />
            <View className="justify-center pt-5 flex-row gap-2 items-center">
              <Text className="text-gray-100 font-pregular text-center">
                Already have an account?
              </Text>
              <Link
                className="text-secondary-100 text-lg font-psemibold"
                href={"/sign-in"}
              >
                Sign In
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

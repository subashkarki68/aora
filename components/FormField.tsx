import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { ComponentProps, FC, useState } from "react";
import { icons, images } from "@/constants";

type FormFieldProps = ComponentProps<typeof View> & {
  title: string;
  value: string;
  handleChangeText: (value: string) => void;
  className?: string;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  placeholder?: string;
};

const FormField: FC<FormFieldProps> = ({
  title,
  value,
  handleChangeText,
  className,
  keyboardType,
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <View className={`space-y-2 flex-row flex ${className}`} {...props}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View style={[styles.viewInput, isFocused && styles.focusedInput]}>
        <TextInput
          textAlignVertical="center"
          className="w-full h-full px-4 text-white font-psemibold"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{ outline: "none" }}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            <Image
              source={!showPassword ? icons.eyeHide : icons.eye}
              className="size-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  viewInput: {
    width: "100%",
    height: 48,
    backgroundColor: "#1E1E2D",
    borderRadius: 10,
    marginTop: 16,
    outline: "none",
  },
  focusedInput: {
    borderColor: "#FF9C01",
    borderWidth: 1,
  },
});

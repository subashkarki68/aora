import { icons } from "@/constants";
import React, { ComponentProps, FC, useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

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
    <View className={`space-y-2 ${className}`} {...props}>
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
              style={styles.eye}
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: Platform.OS === "web" ? 16 : 32,
  },
  focusedInput: {
    borderColor: "#FF9C01",
    borderWidth: 1,
  },
  eye: {
    width: 20,
    height: 20,
  },
});

import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React, { FC } from 'react'

interface ButtonProps {
  text: string
  handlePress: () => void
  isLoading?: boolean
  textStyles?: string
  style?: StyleProp<ViewStyle>
}

const Button: FC<ButtonProps> = ({ text, style, handlePress, isLoading = false, textStyles }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { opacity: isLoading ? 0.5 : 1 }, style]}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      <Text className={`text-lg text-white bg-secondary font-psemibold ${textStyles}`}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF9C01',
    minHeight: 42,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
})
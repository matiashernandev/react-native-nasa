import React from "react"
import { Text, StyleSheet, Pressable } from "react-native"

interface ButtonProps {
  onPress?: any
  title?: string
  buttonStyle?: object
  textStyle?: object
}

export default function Button(props: ButtonProps) {
  const { onPress, title = "Title", buttonStyle, textStyle } = props
  return (
    <Pressable style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "#09f",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
})

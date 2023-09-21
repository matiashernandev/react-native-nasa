import React from "react"
import { Text, StyleSheet, Pressable } from "react-native"

export default function Button(props: { onPress?: any; title?: string }) {
  const { onPress, title = "Title" } = props
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
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
    //lineHeight: 21,
    fontWeight: "bold",
    // letterSpacing: 0.25,
    color: "white",
  },
})

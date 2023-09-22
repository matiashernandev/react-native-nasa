import { SafeAreaView, StyleProp, StyleSheet, ViewStyle } from "react-native"
import { Routes } from "./src/routes"
import { StatusBar } from "expo-status-bar"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
      <StatusBar hidden />
    </SafeAreaView>
  )
}

interface Styles {
  container: StyleProp<ViewStyle>
}

const styles: Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A1854",
  },
})

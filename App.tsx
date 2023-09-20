import { SafeAreaView, StyleProp, StyleSheet, ViewStyle } from "react-native"
import { HomeView } from "./src/views/Home"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeView />
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

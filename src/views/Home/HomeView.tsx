import { StyleSheet, View } from "react-native"
import { Header } from "../../components/Header"
const HomeView = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}
export default HomeView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})

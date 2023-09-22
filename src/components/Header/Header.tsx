import { View, Text, Image, StyleSheet } from "react-native"
const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Cries in React Native</Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={require("../../../assets/nasa-logo.png")}
        />
      </View>
    </View>
  )
}
export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  title: { fontSize: 20, color: "#fff", fontWeight: "bold" },
  image: {
    width: 60,
    height: 60,
  },
})

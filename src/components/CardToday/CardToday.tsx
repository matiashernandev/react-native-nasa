import { FC } from "react"
import { View, Text, Image, StyleSheet, Button } from "react-native"
import { Apod } from "../../types"
import { CustomButton } from "../CustomButton"

const CardToday: FC<Apod> = ({ date, title, url }) => {
  console.log(url)
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: url }} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        {/* <Button title="View" /> */}
        <CustomButton title="View" />
      </View>
    </View>
  )
}
export default CardToday

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 24,
  },
  image: {
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 32,
    width: "100%",
    height: 190,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  date: {
    color: "#fff",
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
  btn: {
    backgroundColor: "red",
  },
})

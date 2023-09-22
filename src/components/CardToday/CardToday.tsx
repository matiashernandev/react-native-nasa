import { FC } from "react"
import { View, Text, Image, StyleSheet, Button } from "react-native"
import { Apod, RootStackParams } from "../../types"
import { CustomButton } from "../CustomButton"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

type Props = NativeStackNavigationProp<RootStackParams, "Detail">

const CardToday: FC<Apod> = ({ date, title, url, explanation }) => {
  const { navigate } = useNavigation<Props>()

  const handleViewPress = () => {
    navigate("Detail", { date, title, url, explanation })
  }

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: url }} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        {/* <Button title="View" /> */}
        <CustomButton title="View" onPress={handleViewPress} />
      </View>
    </View>
  )
}
export default CardToday

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 8,
    borderRadius: 16,
    padding: 16,
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
})

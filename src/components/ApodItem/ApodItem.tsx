import { FC } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Apod, RootStackParams } from "../../types"
import { CustomButton } from "../CustomButton"
import { useNavigation } from "@react-navigation/native"

import { NativeStackNavigationProp } from "@react-navigation/native-stack"

type Props = NativeStackNavigationProp<RootStackParams, "Detail">

const ApodItem: FC<Apod> = ({ title, date, url, explanation }) => {
  const { navigate } = useNavigation<Props>()

  const handleViewPress = () => {
    navigate("Detail", { date, title, url, explanation })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={handleViewPress}
          title="View"
          buttonStyle={{
            backgroundColor: "#0A1854",
            borderColor: "#ffffff",
            borderWidth: 1,
            paddingVertical: 10,
            paddingHorizontal: 16,
          }}
          textStyle={{
            fontSize: 12,
          }}
        />
      </View>
    </View>
  )
}

export default ApodItem
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(18,39,113,255)",
    borderRadius: 16,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 12,
  },
  date: {
    color: "#fff",
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
})

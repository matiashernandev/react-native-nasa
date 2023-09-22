import { FC } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Apod } from "../../types"
import { CustomButton } from "../CustomButton"

const ApodItem: FC<Apod> = ({ title, date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="View"
          buttonStyle={{
            backgroundColor: "",
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

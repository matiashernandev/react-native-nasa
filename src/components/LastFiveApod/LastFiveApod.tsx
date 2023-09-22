import { FC } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { Apod } from "../../types"
import { ApodItem } from "../ApodItem"

const LastFiveApod: FC<{ lastFiveApod: Apod[] }> = ({ lastFiveApod }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
        {Array.isArray(lastFiveApod) &&
          lastFiveApod
            .reverse()
            ?.map((apod) => <ApodItem key={apod.title} {...apod} />)}
      </ScrollView>
    </View>
  )
}
export default LastFiveApod
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 18,
  },
  content: {},
})

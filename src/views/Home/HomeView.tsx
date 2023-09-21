import { StyleSheet, View } from "react-native"
import { Header } from "../../components/Header"
import { getApod } from "../../utils/fetch"
import React, { useEffect, useState } from "react"
const HomeView = () => {
  const [apod, setApod] = useState()

  useEffect(() => {
    const loadApod = async () => {
      try {
        const apod = await getApod()
        setApod(apod)
      } catch (error) {
        console.log(error)
        setApod(undefined)
      }
    }
    loadApod().catch(null)
  }, [])

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

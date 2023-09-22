import { StyleSheet, View } from "react-native"
import { Header } from "../../components/Header"
import { getApod } from "../../utils/fetch"
import React, { useEffect, useState } from "react"
import { CardToday } from "../../components/CardToday"
import { Apod } from "../../types"
import { format, sub } from "date-fns"
import { LastFiveApod } from "../../components/LastFiveApod"

const HomeView = () => {
  const [apod, setApod] = useState<Apod>({})
  const [lastFiveApod, setLastFiveApod] = useState<Apod[]>([])

  useEffect(() => {
    const loadApod = async () => {
      try {
        const apod = await getApod()
        setApod(apod)
      } catch (error) {
        console.log(error)
        setApod({})
      }
    }

    const load5DaysApod = async () => {
      try {
        const date = new Date()
        const todaysDate = format(date, "yyyy-MM-dd")
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd")

        const fiveApod = await getApod(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`
        )
        setLastFiveApod(fiveApod)
      } catch (error) {
        console.log(error)
      }
    }

    loadApod().catch(null)
    load5DaysApod().catch(null)
  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <CardToday {...apod} />
      <LastFiveApod lastFiveApod={lastFiveApod} />
    </View>
  )
}
export default HomeView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#0A1854",
  },
})

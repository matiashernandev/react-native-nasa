import { EXPO_PUBLIC_API_URL } from "react-native-dotenv"

//const API_URL = process.env.EXPO_PUBLIC_API_URL
const API_KEY = process.env.EXPO_PUBLIC_API_KEY

// .env ✔✔
//EXPO_PUBLIC_API_URL=
//EXPO_PUBLIC_API_KEY=
console.log(EXPO_PUBLIC_API_URL)
console.log(API_KEY)

export const getApod = async (urlParams?: string) => {
  try {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod/?api_key=fWgWSj2cOEANInJcgIlNuUgnIZVlrDRkWSvOOrOI${
        urlParams?.length > 0 ? urlParams : ""
      }`
    )
    const data = await res.json()

    return Promise.resolve(data)
  } catch (error) {
    return Promise.reject(error)
  }
}

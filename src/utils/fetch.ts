import { API_URL, API_KEY } from "react-native-dotenv"

export const getApod = async (urlParams?: string) => {
  try {
    const res = await fetch(
      `${API_URL}/?api_key=${API_KEY}${urlParams?.length > 0 ? urlParams : ""}`
    )
    const data = await res.json()

    return Promise.resolve(data)
  } catch (error) {
    return Promise.reject(error)
  }
}

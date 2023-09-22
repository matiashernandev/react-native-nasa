import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParams } from "../types"
import { HomeView } from "../views/Home"
import { DetailView } from "../views/Detail"

const Stack = createNativeStackNavigator<RootStackParams>()
const routeScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: "#09f",
  },
  headerTitleStyle: {
    color: "#fff",
  },
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={routeScreenDefaultOptions}
        />
        <Stack.Screen
          name="Detail"
          component={DetailView}
          options={routeScreenDefaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Routes

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import OpenApp from "../screens/OpenApp";
import Register from "../screens/register/Register";
import SignIn from "../screens/signIn/SignIn";

const stackApp = createStackNavigator(
   {
      OpenApp: OpenApp,
      Register: Register,
      SignIn: SignIn
   },
   {
      initialRouteName: 'OpenApp',
      headerMode: 'none',
      mode: 'card',
      transparentCard: true
   }
)

const AppContainer = createAppContainer(stackApp);
export default AppContainer;
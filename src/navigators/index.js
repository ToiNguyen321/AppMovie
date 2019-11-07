
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import configIconTab from "./configIconTab";
import OpenApp from "../screens/OpenApp";
import Register from "../screens/register/Register";
import SignIn from "../screens/signIn/SignIn";
import Home from "../screens/home/Home";
import Notification from "../screens/notification/Notification";
import Message from "../screens/message/Message";
import Tickets from "../screens/tickets/Tickets";
import TabBarComponents from './TabBarComponents'
import { colors } from "../common/Custom";
import GetTickets from "../screens/getTickets/GetTickets";


const tabBottomNavigation = createBottomTabNavigator(
  {
      Home: Home,
      Tickets: {
         screen: Tickets
      },
      Notification,
      Message
  },
  {
     initialRouteName: 'Tickets',
     tabBarComponent: TabBarComponents,
      defaultNavigationOptions: configIconTab,
       tabBarOptions: {
         activeTintColor: colors.iconTabActive,
         inactiveTintColor: colors.iconTabNoActive,
       },
  },
);
const stackApp = createStackNavigator(
   {
      OpenApp: OpenApp,
      Register: Register,
      SignIn: SignIn,
      Home: tabBottomNavigation,
      GetTickets: GetTickets
   },
   {
      initialRouteName: 'Home',
      headerMode: 'none',
      mode: 'card',
      transparentCard: true
   }
)

const AppContainer = createAppContainer(stackApp);
export default AppContainer;
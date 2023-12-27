
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tabs = AnimatedTabBarNavigator();

//import screens
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
export default () => (
  <Tabs.Navigator
    // default configuration from React Navigation
    tabBarOptions={{
      activeTintColor: "blue",
      inactiveTintColor: "#222222"
    }}
  >
    <Tabs.Screen name="Home" component={HomeScreen}
    options={{
      headerShown:false,
      tabBarIcon: ({ color }) => {
        return <MaterialCommunityIcons name="clipboard-text-outline" size={26} />
      }
    }}/>
    <Tabs.Screen name="About" component={AboutScreen} 
    options={{
      tabBarIcon: ({ focused, color, size }) => (
          <Icon
              name="corner-up-left"
              size={size ? size : 24}
              color={focused ? color : "#222222"}
              focused={focused}
          />
      )
    }}/>
    <Tabs.Screen name="Contact" component={ContactScreen}
    options={{
      tabBarIcon: ({ focused, color, size }) => (
          <Icon
              name="corner-up-left"
              size={size ? size : 24}
              color={focused ? color : "#222222"}
              focused={focused}
          />
      )
    }} />

<Tabs.Screen name="Chat" component={ChatScreen}
    options={{
      tabBarIcon: ({ focused, color, size }) => (
          <Icon
              name="corner-up-left"
              size={size ? size : 24}
              color={focused ? color : "#222222"}
              focused={focused}
          />
      )
    }} />

  </Tabs.Navigator>
)
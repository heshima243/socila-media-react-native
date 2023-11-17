import * as React from "react";
import { StatusBar, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import Reel from "./src/component/tab/Reel";
import FlatListMessage from "./src/component/tab/Chat";
import Contact from "./src/component/tab/Contact";
import FabIcon from "./src/component/badgeIcon/FabIcon";
import BadgeIcon from "./src/component/badgeIcon/BadgeIcon";
import HomeScreen from "./src/component/screen/HomeScreen";
import AppBar from './src/component/header/AppBar'

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const newColorTheme = {
    brand: {
      900: "#8287af",
      800: "#7c83db",
      700: "#b3bef6",
    },
  };
  const theme = extendTheme({ colors: newColorTheme });

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <AppBar/>
      <Stack.Navigator>
        <Stack.Screen   options={{headerShown:false}}  name="Title" component={TabScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
      <FabIcon />
      <StatusBar />
    </NativeBaseProvider>
  );
}

function TabScreen (){
  return (
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: "white",
      inactiveTintColor: "gray",
      style: { backgroundColor: "#3b0785" },
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "media") {
          iconName = focused ? "newspaper-outline" : "newspaper-outline";
        } else if (route.name === "chat") {
          iconName = focused
            ? "chatbox-ellipses-outline"
            : "chatbox-ellipses-outline";
        } else if (route.name === "contact") {
          iconName = focused ? "person-outline" : "person-outline";
        } else if (route.name === "reel") {
          iconName = focused ? "videocam" : "videocam";
        }

        return <Ionicons name={iconName} size={16} color={color} />;
      },
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "gray",
      tabBarLabel: ({ focused, color }) => {
        let label;

        if (route.name === "media") {
          label = "Media";
        } else if (route.name === "chat") {
          label = "Chat";
        } else if (route.name === "contact") {
          label = "Contact";
        } else if (route.name === "reel") {
          label = "Reel";
        }

        return (
          <Text style={{ color: color, fontSize: 12 }}>
            {label.charAt(0).toUpperCase() + label.slice(1).toLowerCase()}
          </Text>
        );
      },
    })}
  >
    <Tab.Screen name="media" component={HomeScreen} />
    <Tab.Screen
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <BadgeIcon focused={focused} count={14} color={color} />
        ),
      }}
      name="chat"
      component={FlatListMessage}
    />
    <Tab.Screen name="contact" component={Contact} />
    <Tab.Screen name="reel" component={Reel} />
  </Tab.Navigator>
  )
}
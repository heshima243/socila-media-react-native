import Article from "../content/Article";
import ReadArticle from "../content/ReadArticle";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        Options={{ headerShown: false }}
        name="HomePage"
        component={Article}
      />
      <Stack.Screen name="ReadArticle" component={ReadArticle} />
    </Stack.Navigator>
  );
}

export default HomeScreen;

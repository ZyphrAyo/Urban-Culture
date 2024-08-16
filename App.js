const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "./screens/SplashScreen";
import CategoryGridViewFull from "./screens/CategoryGridViewFull";
import Frame from "./screens/Frame";
import HomePage from "./screens/HomePage";
import CollectionDetails from "./screens/CollectionDetails";
import CategoryGridViewPage from "./screens/CategoryGridViewPage";
import Collection from "./screens/Collection";
import SplashScreen2 from "./screens/SplashScreen2";
import BlogGridViewPage from "./screens/BlogGridViewPage";
import AddNewAddress from "./screens/AddNewAddress";
import CartItems from "./screens/CartItems";
import Checkout1 from "./screens/Checkout1";
import BlogPageView from "./screens/BlogPageView";
import Checkout2 from "./screens/Checkout2";
import Checkout from "./screens/Checkout";
import SearchResultView from "./screens/SearchResultView";
import CartEmpty from "./screens/CartEmpty";
import SplashScreen3 from "./screens/SplashScreen3";
import SignIn from "./screens/SignIn";
import SplashScreen1 from "./screens/SplashScreen1";
import SignUp from "./screens/SignUp";
import ProductDetails from "./screens/ProductDetails";
import Menu from "./screens/Menu";
import AddNewCard from "./screens/AddNewCard";
import ForgetPassword from "./screens/ForgetPassword";
import SearchResultView from "./screens/SearchResultView";
import ContactUs from "./screens/ContactUs";
import SplashScreen from "./screens/SplashScreen";
import Story from "./screens/Story";
import Checkout3 from "./screens/Checkout3";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="SearchResultView"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CategoryGridViewFull"
              component={CategoryGridViewFull}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CollectionDetails"
              component={CollectionDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CategoryGridViewPage"
              component={CategoryGridViewPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Collection"
              component={Collection}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen2"
              component={SplashScreen2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BlogGridViewPage"
              component={BlogGridViewPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddNewAddress"
              component={AddNewAddress}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CartItems"
              component={CartItems}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout1"
              component={Checkout1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BlogPageView"
              component={BlogPageView}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout2"
              component={Checkout2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchResultView"
              component={SearchResultView}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CartEmpty"
              component={CartEmpty}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen3"
              component={SplashScreen3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen1"
              component={SplashScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddNewCard"
              component={AddNewCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgetPassword"
              component={ForgetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchResultView"
              component={SearchResultView}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContactUs"
              component={ContactUs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Story"
              component={Story}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout3"
              component={Checkout3}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;

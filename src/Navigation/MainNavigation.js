import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "../screens/Splash/StartScreen";
import Login from "../screens/Auth/Login";
import Signup from "../screens/Auth/Signup";
import AnimTab2 from "../screens/Bottomtabs/AnimTab2";
import Cart from "../screens/Home/Cart";
import CheckoutPage from "../screens/Home/CheckoutPage";
import Home_Page from "../screens/Home/Home_Page";
import PayedPage from "../screens/Home/PayedPage";
import ProductDetails from "../screens/Home/ProductDetails";
import Flavours from "../screens/Home/Flavours";
import TrackingPage from "../screens/Home/TrackingPage";
import ProfileDetails from "../screens/Profile/ProfileDetails";
import Refer_Friend from "../screens/Profile/Refer_Friend";


const RootStack = createStackNavigator();


const MainNaviagtion = () => {

    return (
        <>
            <RootStack.Navigator
                initialRouteName="Splash"
                screenOptions={{ headerShown: false }}
            >
                {/* SplachScreen */}
                <RootStack.Screen
                    name="Splash"
                    component={StartScreen}
                    options={{ headerShown: false }}
                />
                {/* Auth screens */}
                <RootStack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Signup"
                    component={Signup}
                    options={{ headerShown: false }}
                />
                {/* Bottom tabs */}
                <RootStack.Screen
                    name="AnimTab2"
                    component={AnimTab2}
                    options={{ headerShown: false }}
                />
                {/* Home screens */}

                <RootStack.Screen
                    name="Home_Page"
                    component={Home_Page}
                    options={{ headerShown: false }}
                />

                <RootStack.Screen
                    name="Flavours"
                    component={Flavours}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="ProductDetails"
                    component={ProductDetails}
                    options={{ headerShown: false }}
                />
                {/* Home screens ==> Cart and payment  */}

                <RootStack.Screen
                    name="Cart"
                    component={Cart}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="CheckoutPage"
                    component={CheckoutPage}
                    options={{ headerShown: false }}
                />

                <RootStack.Screen
                    name="PayedPage"
                    component={PayedPage}
                    options={{ headerShown: false }}
                />
                {/* TrackingPage */}
                <RootStack.Screen
                    name="TrackingPage"
                    component={TrackingPage}
                    options={{ headerShown: false }}
                />

                {/* Profile pages  */}
                <RootStack.Screen
                    name="ProfileDetails"
                    component={ProfileDetails}
                    options={{ headerShown: false }}
                />

                <RootStack.Screen
                    name="Refer_Friend"
                    component={Refer_Friend}
                    options={{ headerShown: false }}
                />
            </RootStack.Navigator>
        </>
    )
}

export default MainNaviagtion
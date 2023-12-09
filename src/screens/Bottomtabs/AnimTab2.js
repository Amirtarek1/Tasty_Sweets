import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, TouchableOpacity, View ,KeyboardAvoidingView, Platform } from 'react-native'
import Icon, { Icons } from './Icons';
import Colors from './Colors';
import * as Animatable from 'react-native-animatable';
import Styles from './Styles';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Dimensions } from "react-native"
import { COLORS, FONT } from '../../constants';
import CheckoutPage from '../Home/CheckoutPage';
import Home_Page from '../Home/Home_Page';


const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: Home_Page },
  { route: 'كوبونات', label: 'كوبونات', type: Icons.Foundation, icon: 'dollar-bill', component: Home_Page },
  { route: 'طلباتي', label: 'طلباتي', type: Icons.FontAwesome5, icon: 'shopping-bag', component: Home_Page },
  { route: 'الملف الشخصي', label: 'الملف الشخصي', type: Icons.FontAwesome, icon: 'user-circle-o', component: Home_Page },
];

const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } }
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={Styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef}
            style={styles.circle} />
          <Icon type={item.type} name={item.icon} size={22} color={focused ? Colors.white : COLORS.white} />
        </View>
        <Animatable.Text
          ref={textRef}
          style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>

  )
}

function AnimTab2() {



  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <Tab.Navigator

        initialRouteName='Home_page'
        screenOptions={{

          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen key={index} name={item.route} component={item.component}
              options={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarButton: (props) => <TabButton {...props} item={item} />
              }}
            />
          )
        })}
      </Tab.Navigator>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: h * 0.068,
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "center",
  },
  btn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: COLORS.plusbottonColor,
    backgroundColor: COLORS.plusbottonColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.plusbottonColor,
    borderRadius: 25,
  },
  text: {
    fontSize: RFPercentage(1.6),
    fontFamily: FONT.Quicksand_Bold,
    textAlign: 'center',
    color: COLORS.plusbottonColor,
  }
})

export default AnimTab2;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawer from '../components/CustomDrawer';
import { enableScreens } from 'react-native-screens';

enableScreens();

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerType: 'front',
          drawerStyle: {
            width: '75%',
          },
        }}
      >
        <Drawer.Screen name="Main" component={BottomTabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

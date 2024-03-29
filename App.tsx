import {StyleSheet} from 'react-native';
import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InternsBatch from './screens/InternsBatch';
import InternshipBatchDetails from './screens/InternshipBatchDetails';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddBatchIntern from './screens/AddBatchIntern';
import Dashboard from './screens/Dashboard';
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
function ManageBatch() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}></BottomTabs.Screen>
      <BottomTabs.Screen
        name="InternBatchDetails"
        component={InternshipBatchDetails}></BottomTabs.Screen>
    </BottomTabs.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ManageBatch"
            component={ManageBatch}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="InternsBatch"
            component={InternsBatch}
            options={{title: 'Internship Batch'}}></Stack.Screen>
          <Stack.Screen
            name="AddBatchIntern"
            component={AddBatchIntern}></Stack.Screen>
          {/* <Stack.Screen
            name="InternBatchDetails"
            component={InternshipBatchDetails}
            options={{title: 'InternshipBatch Details'}}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

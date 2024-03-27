import {StyleSheet} from 'react-native';
import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InternsBatch from './screens/InternsBatch';
import InternshipBatchDetails from './screens/InternshipBatchDetails';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="InternsBatch"
            component={InternsBatch}
            options={{title: 'Internship Batch'}}></Stack.Screen>
          <Stack.Screen
            name="InternBatchDetails"
            component={InternshipBatchDetails}
            options={{title: 'InternshipBatch Details'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

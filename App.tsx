/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import PlanScreen from './src/PlanScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootStackParamList } from './src/commons/types';
import { enableScreens } from 'react-native-screens';
import { WorkoutProvider } from './src/context/WorkoutContext';
import LoginScreen from './src/AuthFlowScreens/LoginScreen';
enableScreens(); 
const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {

  return (
    <WorkoutProvider>
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name = "Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Plan" component={PlanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
    </WorkoutProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

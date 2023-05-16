import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
// import { Provider } from 'react-redux';
// import { store } from './src/store';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/components/Login';
import Main from './src/components/Main';


const Stack = createStackNavigator();

export default function App() {
  return (
    // <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Вход" component={Login} options={{ headerStyle: {backgroundColor: '#fff'}, headerTitleAlign: 'center'}} />
          <Stack.Screen name="Главная" component={Main} options={{ headerStyle: {backgroundColor: '#fff'}, headerTitleAlign: 'center'}} />
        </Stack.Navigator>
      </NavigationContainer>
    // </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
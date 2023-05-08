import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Login from './src/components/Login';
import { store } from './src/store';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Вход" component={Login} options={{ headerStyle: {backgroundColor: '#fff'}, headerTitleAlign: 'center'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

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
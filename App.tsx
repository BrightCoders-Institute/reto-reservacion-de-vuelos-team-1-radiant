import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SideMenu } from './src/navigation/SideMenu';
import { FIREBASE_AUTH } from './src/database/firebaseconfig';
import { User, onAuthStateChanged } from 'firebase/auth';
import { AuthNavigator } from './src/navigation/AuthNavigator';

const Drawer = createDrawerNavigator();

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() =>{
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user); 
    })
  }, [])

  return (
    <NavigationContainer>
      {user ? (
        <SideMenu />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default App;



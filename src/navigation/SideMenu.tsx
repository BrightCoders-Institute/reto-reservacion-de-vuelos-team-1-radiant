import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../appTheme/AppTheme';
import { ButtonPrimary } from '../components/ButtonPrimary/ButtonPrimary';
import { getAuth, signOut } from 'firebase/auth';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();
const auth = getAuth();

export const SideMenu = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <InsideMenu {...props} />}>
      <Drawer.Screen name="Main" component={StackNavigator} options={{ headerShown: false }} />
    </Drawer.Navigator>
  )
}
const InsideMenu = ( { navigation }: DrawerContentComponentProps ) => {

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Sesión cerrada exitosamente');
        () => navigation.navigate('LogInScreen')
      })
      .catch((error) => {
        console.log('Error al cerrar sesión:', error);
      });
  };

  return (
    <DrawerContentScrollView>
      <View style={ styles.avatarContainer }>
        <Image 
        source={{
          uri: 'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg'
        }}
        style= { styles.avatarSideMenu }
        />
      </View>

      <View style={ styles.menuContainer } >

          <TouchableOpacity 
          style={{ marginVertical: 5 }}
          onPress={() => navigation.navigate('MyFlightsScreen')}
          >
            <Text style={ { fontSize: 20 } }>My Flights</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={{ marginVertical: 5 }}
          onPress={() => navigation.navigate('Settings')}
          >
            <Text style={{ fontSize: 20 }}>Settings</Text>
          </TouchableOpacity>

      </View>
      <View style={styles.logoutButtonContainer}>
        <ButtonPrimary 
          title='Log Out'
          // disabled= {false}
          isValid={true}
          onPress={handleSignOut}
          />
      </View>


    </DrawerContentScrollView>
  )
}

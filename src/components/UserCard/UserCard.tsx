import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../database/firebaseconfig';
import { doc, getDoc } from 'firebase/firestore';

export const UserCard = () => {

  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    const auth = FIREBASE_AUTH;
    const user = auth.currentUser;

    if (user) {
      const userDocRef = doc(FIRESTORE_DB, 'users', user.uid);
      getDoc(userDocRef)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            const userData = docSnapshot.data();
            setFirstName(userData.firstName);
          }
        })
        .catch((error) => {
          console.log('Error getting user data:', error);
        });
    }
  }, []);

  return (
    <View style={styles.userCardContainer}>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg',
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{firstName ? firstName : 'User Name'}</Text>
      </View>
    </View>
  );
};

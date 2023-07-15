import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { SubTitle } from '../components/SubTitle/SubTitle';
import styles from '../appTheme/AppTheme';
import BookingCard from '../components/BookingCard/BookingCard';
import { StackScreenProps } from '@react-navigation/stack';
import { ButtonPrimary } from '../components/ButtonPrimary/ButtonPrimary';
import { collection, addDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../database/firebaseconfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import moment from 'moment';

interface Props extends StackScreenProps<any, any> { }

export const FinalBookingScreen = ({ navigation, route }: Props) => {
  const [selectedFlightOrigin] = useState(
    route.params?.selectedFlightOrigin || null,
  );
  const [selectedFlightDestination] = useState(
    route.params?.selectedFlightDestination || null,
  );
  const [selectedDate] = useState(route.params?.selectedDate || null);
  const [selectedPassengers] = useState(
    route.params?.selectedPassengers || null,
  );

  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Usuario en sesión
        setUser(user);
      } else {
        // No hay usuario en sesión
        setUser(null);
      }
    });

    // Devuelve una función de limpieza para cancelar la suscripción cuando la pantalla se desmonte
    return () => unsubscribe();
  }, []);

  const handleNextButton = async () => {
    try {
      const bookingData = {
        origin: selectedFlightOrigin,
        destination: selectedFlightDestination,
        date: selectedDate,
        passengers: selectedPassengers,
        userId: user.uid,
        createdAt: moment().toISOString(),
      };

      // Guarda el bookingData en la base de datos Firestore
      const docRef = await addDoc(collection(FIRESTORE_DB, 'bookings'), bookingData);
      console.log('Booking added with ID:', docRef.id);

      navigation.navigate('MyFlightsScreen');
    } catch (error) {
      console.error('Error adding booking:', error);
      alert('Failed to add booking: ' + error.message);
    }
  };

  return (
    <View style={styles.requestContainer}>
      <View style={styles.finishBookingField}>
        <BookingCard
          selectedFlightOrigin={selectedFlightOrigin}
          selectedFlightDestination={selectedFlightDestination}
          date={selectedDate}
          passengers={selectedPassengers}
        />
        <SubTitle text="Your request was received." />
      </View>
      <View style={styles.buttonFinishContainer}>
        <ButtonPrimary
          title="Finish"
          isValid={true}
          disabled={false}
          onPress={handleNextButton}
        />
      </View>
    </View>
  );
};

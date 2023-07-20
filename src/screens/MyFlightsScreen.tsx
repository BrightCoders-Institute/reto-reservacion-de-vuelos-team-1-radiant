import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import styles from '../appTheme/AppTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {UserCard} from '../components/UserCard/UserCard';
import {AddFlightButton} from '../components/AddFlightsButton/AddFlightButton';
import BookingCard from '../components/BookingCard/BookingCard';
import {collection, query, where, onSnapshot} from 'firebase/firestore';
import {FIRESTORE_DB} from '../database/firebaseconfig';
import {getAuth} from 'firebase/auth';
import {bookingData} from '../interfaces/interfaces';
import ConditionalRender from '../components/ConditionalRendering/ConditionalRendering';

interface Props extends StackScreenProps<any, any> {}

export const MyFlightsScreen = ({navigation}: Props) => {
  const [bookings, setBookings] = useState<bookingData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(FIRESTORE_DB, 'bookings'),
        where('userId', '==', user?.uid),
      ),
      snapshot => {
        const bookingsData: bookingData[] = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          const booking: bookingData = {
            id: doc.id,
            origin: data.origin,
            destination: data.destination,
            date: data.date,
            passengers: data.passengers,
          };
          bookingsData.push(booking);
        });
        setBookings(bookingsData);
        setIsLoading(false);
      },
    );

    return () => unsubscribe();
  }, [user]);

  return (
    <View style={styles.myFlightsContainer}>
      <View style={styles.headerMyFlightsContainer}>
        <UserCard />
        <Text style={styles.titleStyle}>My Flights</Text>
      </View>

      <View style={styles.activityIndicator}>
        <ConditionalRender condition={isLoading}>
          <ActivityIndicator size="large" color="#2774D5" />
        </ConditionalRender>
      </View>

      <ConditionalRender condition={bookings.length === 0}>
        <Text style={styles.emptyReservations}>
          You don't have reservations yet
        </Text>
      </ConditionalRender>

      <FlatList
        data={bookings}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <BookingCard
            selectedFlightOrigin={item.origin}
            selectedFlightDestination={item.destination}
            date={item.date}
            passengers={item.passengers}
            isOnMyFLights={true}
          />
        )}
      />

      <View style={styles.addFlightsButtonContainer}>
        <AddFlightButton
          title="+"
          isValid={true}
          disabled={false}
          onPress={() => navigation.navigate('WhereAreYouScreen')}
        />
      </View>
    </View>
  );
};

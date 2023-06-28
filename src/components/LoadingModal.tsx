import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LoadingModalProps } from '../interfaces/interfaces';


const LoadingModal = ({ isLoading, isRegistered }: LoadingModalProps) => (

    <Modal visible={isLoading || isRegistered} transparent>
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                {isLoading ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator style={styles.activityIndicator} size="large" color="#2D7BDD" />
                        <View>
                            <Text style={styles.signUpModalText}>Signing Up...</Text>
                        </View>
                    </View>
                ) : (
                    <View style={styles.successContainer}>
                        <View style={styles.iconContainer}>
                            <Icon name="checkmark-circle-outline" size={100} color="#2D7BDD" />
                        </View>
                        <Text style={styles.signUpModalText}>Signed Up</Text>
                    </View>
                )}
            </View>
        </View>
    </Modal>
);

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#21252b',
        padding: 20,
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    successContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    activityIndicator: {
        transform: [{ scale: 2.5 }],
        marginVertical: 25,
    },
    iconContainer: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginBottom: 15,
    },
    signUpModalText: {
        color: '#2D7BDD',
        textAlign: 'center',
        marginTop: 20,
    },
});


export default LoadingModal;

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
import styles from '../appTheme/AppTheme';


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


export default LoadingModal;

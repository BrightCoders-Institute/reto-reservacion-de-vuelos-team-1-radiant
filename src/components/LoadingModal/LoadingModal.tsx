import React from 'react';
import { View, Text, Modal,ActivityIndicator, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconX from 'react-native-vector-icons/Octicons';
import {LoadingModalProps} from '../../interfaces/interfaces';
import styles from './styles';

const LoadingModal = ({ isLoading, isRegistered, loadingTitle, title, success }: LoadingModalProps) => (

    <Modal visible={isLoading || isRegistered} transparent>
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                {isLoading ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator style={styles.activityIndicator} size="large" color="#2D7BDD" />
                        <View>
                            <Text style={[styles.signUpModalText, styles.signUpModalTextSuccess]}>{ loadingTitle }</Text>
                        </View>
                    </View>
                ) : (
                    <View style={styles.successContainer}>
                        <View style={styles.iconContainer}>
                            {
                                success ? (
                                    <Icon name="checkmark-circle-outline" size={100} color="#2D7BDD" />
                                ) : (
                                    <IconX name="x-circle" size={80} color="red"/>
                                )
                            }
                        </View>
                        <Text style={[styles.signUpModalText, success ? styles.signUpModalTextSuccess : styles.signUpModalTextError]}>{ title }</Text>
                    </View>
                )}
            </View>
        </View>
    </Modal>
);


export default LoadingModal;

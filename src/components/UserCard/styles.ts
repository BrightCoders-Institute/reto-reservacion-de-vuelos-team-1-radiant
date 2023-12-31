import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    userCardContainer: {
        alignItems: 'flex-start',
    },
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    name: {
        marginLeft: '7%',
        fontSize: 18,
        color: 'grey',
    },
});

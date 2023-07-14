import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from './styles'

export const UserCard = () => {
  return (
    <View style={styles.userCardContainer}>
        <View style={ styles.avatarContainer }>
            <Image
            source={{
                uri: 'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg'
                }}
                style= { styles.avatar }
                />
            <Text style={styles.name}>User Name</Text>
        </View>
    </View>
  )
}

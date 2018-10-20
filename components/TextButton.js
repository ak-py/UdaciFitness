import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {FontAwesome, Entypo} from '@expo/vector-icons'

export default function TextButton ({ children, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{children}</Text>
        </TouchableOpacity>
    )
}
import React from 'react'
import { View, Slider, Text, StyleSheet, Platform } from 'react-native'
import { gray } from '../utils/colors';

export default function UdaciSlider ({ max, unit, step, value, onChange }) {
    return (
        <View style={styles.rowin}>
            <Slider
                style={{flex: 1}}
                step = {step}
                value = {value}
                maximumValue = {max}
                minimumValue = {0}
                onValueChange = {onChange}
            />
            <View stlye={styles.metricCounter} >
                <Text style={{fontSize: 24, textAlign:'center'}} >{value}</Text>
                <Text stlye={{fontSize: 18, color: gray}}>{unit}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rowin: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    metricCounter: {
        width: 85,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
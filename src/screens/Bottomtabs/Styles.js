import React from 'react';
import { StyleSheet } from "react-native";
import Colors from './Colors';
import { COLORS } from '../../constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        // borderRadius:RFPercentage(5)
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#00d",
    },
    separator: {
        
        height: 0.3,
        width: '100%',
        backgroundColor: "#00d",
        opacity: 0.8,
    },
    boldText: {
        fontWeight: 'bold',
        backgroundColor: "#00d",
    },
    contentContainerStyle: {
        paddingBottom: 200,
        backgroundColor: "#00d",
    },
    contentContainerStyle2: {
        backgroundColor: "#00d",
        paddingBottom: 100,
    },
})

export default Styles;
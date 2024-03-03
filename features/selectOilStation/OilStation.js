// import React, { useState } from 'react'; 
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../../resources/Colors';

const OilStation = (props) => {
    return (
        <TouchableHighlight 
            style={{paddingBottom: 10}}
            activeOpacity={0.6}
            onPress={() => props.selectOilStation(props.index)}
            underlayColor={Colors.ORANGE}
        >
            <View style={props.oilStation.isSelect ? styles.containerSelect : styles.containerUnSelect} >
                <Text style={styles.text}>{props.oilStation.name} </Text>
                <Icon
                    style={styles.searchIcon}
                    name={props.oilStation.isSelect ? "check-circle" : "circle"}
                    size={20}
                    color={Colors.WHITE}
                />
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    containerUnSelect: {
        backgroundColor: Colors.GRAY,
        borderRadius: 10,
        padding: 14,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerSelect: {
        backgroundColor: Colors.BLUE,
        borderRadius: 10,
        padding: 14,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: Colors.WHITE,
        fontSize: 14
    },
});

export default OilStation;
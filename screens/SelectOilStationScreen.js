import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

import SelectOilStation from '../features/selectOilStation/SelectOilStation';

import Colors from '../resources/Colors';

const SelectOilStationScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../resources/images/Logo.png')} style={styles.image}>
                <View>
                    <Text style={styles.textBold}>คุณมีสถานีเติมน้ำมันมากกว่า 1 สถานี</Text>
                    <Text style={styles.textSmall}>กรุณาเลือกรายการสถานีน้ำมันที่ต้องการจะใช้งานตามรายการข้างล่างนี้</Text>
                </View>
            </ImageBackground>
            <View style={styles.selectOilStationContent}>
                <SelectOilStation navigation={navigation} />
            </View>

            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BLUE,
    },
    selectOilStationContent: {
        marginLeft: 18,
        marginRight: 18,
        marginBottom: 18,
    },
    image: {
        flex: 1,
        justifyContent: 'flex-end',
        marginTop: 26,
        marginLeft: 18,
        marginRight: 18,
        marginBottom: 18,
    },

    textBold: {
        color: Colors.WHITE,
        fontWeight: "bold",
        fontSize: 20,
    },
    textSmall: {
        color: Colors.WHITE,
        fontSize: 14,
    },

});

export default SelectOilStationScreen;
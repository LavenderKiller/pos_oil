import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

import Login from '../features/login/Login';

import Colors from '../resources/Colors';

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../resources/images/Logo.png')} style={styles.image}>
                <View>
                    <Text style={styles.textBold}>ยินดีต้อนรับ</Text>
                    <Text style={styles.textNormal}>สู่ระบบสำหรับจัดการสถานีเติมน้ำมัน</Text>
                    <Text style={styles.textSmall}>คุณจะได้รับความสะดวกในการจัดเก็บข้อมูลที่สามารถนำไปวิเคราะห์การตลาดได้ อย่างง่ายดายที่นี</Text>
                </View>
            </ImageBackground>
            <View style={styles.loginContent}>
                <Login navigation={navigation} />
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
    loginContent: {
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
    textNormal: {
        color: Colors.WHITE,
        fontSize: 18,
    },
    textSmall: {
        color: Colors.WHITE,
        fontSize: 14,
    },

});

export default LoginScreen;
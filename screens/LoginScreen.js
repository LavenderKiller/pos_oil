import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text, ImageBackground } from 'react-native';

import Login from '../features/login/Login';

import Colors from '../resources/Colors';

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../resources/images/Logo.png')} style={styles.image}>
                <View style={{flex: 1}}>
                    <View style={{flex: 2}} />
                    <View style={styles.loginTitle}>
                        <Text style={styles.textBold}>ยินดีต้อนรับ</Text>
                        <Text style={styles.textNormal}>สู่ระบบสำหรับจัดการสถานีเติมน้ำมัน</Text>
                        <Text style={styles.textSmall}>คุณจะได้รับความสะดวกในการจัดเก็บข้อมูลที่สามารถนำไปวิเคราะห์การตลาดได้ อย่างง่ายดายที่นี</Text>
                    </View>
                    <View style={styles.loginForm}>
                        <Login navigation={navigation} />
                    </View>
                </View>
            </ImageBackground>
            
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BLUE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    viewEmpty: {
        // flex: 1,
    },
    viewBody: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginTitle: {
        flex: 1,
        marginLeft: 18,
        marginRight: 18,
    },
    titleText: {
        color: Colors.WHITE
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

    loginForm: {
        flex: 3,
        marginLeft: 18,
        marginRight: 18,
        marginBottom: 18,
    }
});

export default LoginScreen;
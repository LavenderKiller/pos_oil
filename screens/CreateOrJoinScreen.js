import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

import CreateOrJoin from '../features/createOrJoin/CreateOrJoin';

import Colors from '../resources/Colors';

const CreateOrJoinScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContent}>
                <Text style={styles.textNormal}>คุณยังไม่มีสถานีเติมน้ำมัน</Text>
                <Text style={styles.textSmall}>คุณสามารถเลือกสร้าง</Text>
                <Text style={styles.textSmall}>หรือเข้าร่วมสถานีเติมน้ำมันที่นี่</Text>
            </View>

            <ImageBackground source={require('../resources/images/Logo.png')} style={styles.image}>
                <View style={styles.bodyContent}>
                    <CreateOrJoin navigation={navigation} />
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
    },
    titleContent: {
        alignItems: 'flex-end',
        marginTop: 50,
        marginLeft: 18,
        marginRight: 18,
    },
    bodyContent: {
        flex: 1,
    },
    image: {
        flex: 3,
        justifyContent: 'flex-end',
        marginLeft: 18,
        marginRight: 18,
        marginBottom: 18,
    },

    textNormal: {
        textAlign: 'right',
        color: Colors.WHITE,
        fontSize: 18,
    },
    textSmall: {
        textAlign: 'right',
        color: Colors.WHITE,
        fontSize: 14,
    },

});

export default CreateOrJoinScreen;
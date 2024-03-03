import { StyleSheet, TouchableOpacity, View, Text, Button } from 'react-native';

import CustomInput from '../../components/Input/CustomInput';
import SecureInput from '../../components/Input/SecureInput';
import Colors from '../../resources/Colors';

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.textLink}>ลงชื่อเข้าใช้งานระบบ</Text>
                </View>

                <CustomInput title="อีเมล" placeholder="กรอกอีเมล" />
                <SecureInput title="รหัสผ่าน" placeholder="กรอกรหัสผ่าน" />

                <View style={{alignItems: 'flex-end', padding: 8}}>
                    <Text style={styles.textLink} onPress={(e) => console.log('click forgot password')}>
                        ลืมรหัสผ่าน
                    </Text>
                </View>
            </View>

            <View>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('SelectOilStation')}
                        underlayColor={Colors.WHITE}>
                            <Text style={styles.textLink}>เข้าสู่ระบบ</Text>
                    </TouchableOpacity>
                </View>

                <View style={{alignItems: 'flex-end', padding: 8}}>
                    <Text>
                        <Text style={styles.text}>สมัครสมาชิกที่นี </Text>
                        <Text style={styles.textLink} onPress={(e) => navigation.navigate('Register')}>
                            ลงทะเบียนเข้าใช้งาน
                        </Text>
                    </Text>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.ORANGE,
        borderRadius: 20,
        padding: 18,
        justifyContent: 'space-between'
    },
    text: {
        color: Colors.WHITE,
        fontSize: 14
    },
    textLink: {
        color: Colors.WHITE,
        fontWeight: 'bold',
        fontSize: 14
    },
    button:{
        alignItems: 'center',
        backgroundColor: Colors.GREEN,
        borderRadius:10,
        padding: 14,
      },

});

export default Login;
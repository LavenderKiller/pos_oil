import { StyleSheet, TouchableOpacity, View, Text, Button } from 'react-native';

import CustomInput from '../../components/Input/CustomInput';
import SecureInput from '../../components/Input/SecureInput';
import Colors from '../../resources/Colors';

const Register = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.textLink}>ลงทะเบียนเข้าใช้งานระบบ</Text>
                </View>

                <CustomInput title="ชื่อที่แสดงในระบบ" placeholder="กรอกชื่อที่แสดงในระบบ" />
                <CustomInput title="อีเมล" placeholder="กรอกอีเมล" />
                <SecureInput title="รหัสผ่าน" placeholder="กรอกรหัสผ่าน" />
            </View>

            <View style={{marginTop: 18}}>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Home')}
                        underlayColor={Colors.WHITE}>
                            <Text style={styles.textLink}>ลงทะเบียน</Text>
                    </TouchableOpacity>
                </View>

                <View style={{alignItems: 'flex-end', padding: 8}}>
                    <Text>
                        <Text style={styles.text}>เป็นสมาชิกอยู่แล้ว </Text>
                        <Text style={styles.textLink} onPress={(e) => navigation.goBack()}>
                            เข้าสู่ระบบ
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
        minHeight: '50%',
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

export default Register;
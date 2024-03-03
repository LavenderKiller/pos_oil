import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text } from 'react-native';


const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigation.navigate('Profile', {name: 'Jane'})
                }
            />
            <Text onPress={(e) => {
                navigation.goBack();
                navigation.goBack();
            }}>
                เข้าสู่ระบบ
            </Text>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
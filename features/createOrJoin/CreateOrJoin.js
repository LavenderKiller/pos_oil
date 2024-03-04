import { StyleSheet, TouchableHighlight, View, Text, Image } from 'react-native';

import Colors from '../../resources/Colors';

const CreateOrJoin = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableHighlight
                style={{paddingBottom: 10}}
                activeOpacity={0.6}
                onPress={() => console.log('click create a new oil')}
                underlayColor={Colors.TRANSPARENT}
            >
                <View style={styles.create}>
                    <Image source={require('../../resources/images/create.png')} style={styles.backgroundImage} />
                </View>
            </TouchableHighlight>

            <TouchableHighlight
                style={{paddingBottom: 10}}
                activeOpacity={0.6}
                onPress={() => console.log('click join a oil')}
                underlayColor={Colors.TRANSPARENT}
            >
                <View>
                    <Image source={require('../../resources/images/join.png')} style={styles.backgroundImage} />
                </View>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    backgroundImage: {
        width: 340,
        height: 340,
        resizeMode: 'stretch', // or 'stretch', 'cover'
    },
    create: {
        marginBottom: -140,
    },
});

export default CreateOrJoin;
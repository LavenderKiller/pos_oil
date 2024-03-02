import React, { useState } from 'react'; 
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../../resources/Colors';

const SecureInput = (props) => {
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);
    const [text, setText] = useState("");

    return (
        <View>
            <Text style={styles.text}>
                <Text>{props.title}</Text>
                <Text style={{color: Colors.RED}}> *</Text>
            </Text>

            <View style={styles.inputSection}>
                <TextInput
                    style={styles.input}
                    placeholder={props.placeholder}
                    placeholderTextColor={Colors.GRAY}
                    secureTextEntry={isPasswordSecure}
                    autoCapitalize='none'
                    value={text}
                    onChangeText={newText => setText(newText)}
                />
                <Icon
                    style={styles.searchIcon}
                    name={isPasswordSecure ? "eye-slash" : "eye"}
                    size={20}
                    color={Colors.BLUE}
                    onPress={() => setIsPasswordSecure(!isPasswordSecure)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: Colors.WHITE,
        marginBottom: 8,
    },

    inputSection: {
        paddingLeft: 8,
        borderRadius:10,
        color: Colors.BLUE,
        borderColor: Colors.BLUE,
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        padding: 10,
        borderRadius:10,
        color: Colors.BLUE,
        borderColor: Colors.BLUE,
        backgroundColor: Colors.WHITE,
    },
});

export default SecureInput;
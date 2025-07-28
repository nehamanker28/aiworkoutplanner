import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { root } from 'postcss';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../commons/types';

type navigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = { 
    navigation: navigationProp;
};
const LoginScreen : React.FC<Props> = ({ navigation }) =>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login with Google</Text>
            <Button
                title="Login with Google"
                onPress={() => {
                    navigation.navigate('Home'); // For testing, navigate to Home directly
                 //   promptAsync();
                }}
               // disabled={!request}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});
export default LoginScreen;
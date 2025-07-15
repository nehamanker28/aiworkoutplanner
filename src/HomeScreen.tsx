
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet ,Button} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootStackParamList } from './commons/types';

type navigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = { 
    navigation: navigationProp;
};
const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <SafeAreaProvider>
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to AI Workout Planner</Text>
            <Text style={styles.subtitle}>Your personalized workout assistant powered by AI.</Text>
            <Button
        title="Generate Plan"
        onPress={() => navigation.navigate('Plan', { plan: 'AI Generated Plan' })} // Navigate to Plan screen with a sample plan
      />
        </View>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default HomeScreen;
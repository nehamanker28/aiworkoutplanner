import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,FlatList} from 'react-native';
import { RootStackParamList } from './commons/types';
import { useWorkout } from './context/WorkoutContext';

type PlanScreenProps = RouteProp<RootStackParamList, 'Plan'>;

type Props = {route : PlanScreenProps};

const PlanScreen :React.FC<Props>= ({route}) => {
    const { plans } = useWorkout();
    const handleCreatePlan = () => {
        console.log('Create Plan button pressed',route.params);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Workout Plans</Text>
            <FlatList 
                data={plans} 
                keyExtractor={(item) => item.id} 
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'medium' }}>{item.title}</Text>
                        <Text>{item.duration}</Text>
                    </View>
                )}
            />
            
            <TouchableOpacity style={styles.button} onPress={handleCreatePlan}>
                <Text style={styles.buttonText}>Create New Plan</Text>
                </TouchableOpacity>
   
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding :10,
        justifyContent: 'flex-start',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default PlanScreen;
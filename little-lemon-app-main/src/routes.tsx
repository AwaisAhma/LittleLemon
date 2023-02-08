import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreen } from './screens/Onbording';
import { HomeScreen } from './screens/HomeScreen';
import { ProfileScreen } from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {state.isOnboardingCompleted ? (
                    // Onboarding completed, user is signed in
                    <>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Profile" component={ProfileScreen} />
                    </>
                ) : (
                    // User is NOT signed in
                    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
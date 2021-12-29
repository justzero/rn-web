import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {AppView} from '@components/app/app';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}
            >
                <View style={styles.header} >
                    <Text style={styles.highlight}>It Works.</Text>
                </View>
                <AppView />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 200,
        backgroundColor: '#4b5abe',
        paddingTop: 120
    },
    highlight: {
        fontWeight: '700',
        fontSize: 30,
        textAlign: 'center',
        color: '#FFF'
    },
});
export default App;

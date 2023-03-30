import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { useState } from 'react';
import { COLORS } from './src/components/Colors';
import KeyBoard from './src/components/Keyboard';

export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value='{theme}'>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: '#000' }]}>
        <Text style={{ color: "gray" }}>Mode</Text>
        <Switch style={{ marginTop: 5 }} value={theme === 'light'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      </SafeAreaView>
      <KeyBoard />
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

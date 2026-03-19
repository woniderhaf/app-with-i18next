import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import i18next from 'i18next';
import { useEffect } from 'react';
import { AppNavigator } from './src/presentation';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    setTimeout(() => {
      i18next.changeLanguage('ru');
    }, 2000);
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { SplashScreen } from 'expo-router';
import { LanguageContext, updateLocale } from '@/utils/i18n';
import * as Localization from 'expo-localization';
import { ThemeContext } from '@/utils/ThemeContext';

export default function RootLayout() {
  useFrameworkReady();
  const [language, setLanguage] = useState(Localization.locale.split('-')[0]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Bold': Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    updateLocale(newLanguage);
  };

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ title: 'Oops!' }} />
        </Stack>
        <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}
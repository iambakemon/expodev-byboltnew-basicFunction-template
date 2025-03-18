import { Tabs } from 'expo-router';
import { Platform, View } from 'react-native';
import { Chrome as Home, Settings, QrCode, Wifi, Bluetooth } from 'lucide-react-native';
import i18n from '@/utils/i18n';
import { useLanguage } from '@/utils/i18n';
import { useEffect, useState } from 'react';
import { useTheme } from '@/utils/ThemeContext';
import { theme } from '@/utils/theme';

export default function TabLayout() {
  const { language } = useLanguage();
  const [key, setKey] = useState(0);
  const { isDarkMode } = useTheme();
  const colors = theme[isDarkMode ? 'dark' : 'light'];

  useEffect(() => {
    setKey(prev => prev + 1);
  }, [language]);

  return (
    <Tabs
      key={key}
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text.secondary,
        headerStyle: {
          backgroundColor: colors.background,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: colors.text.primary,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: Platform.select({ web: 64, default: 60 }),
        },
        tabBarItemStyle: {
          height: '100%',
        },
        tabBarIconStyle: {
          marginBottom: 4,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Inter-Regular',
          lineHeight: Platform.select({ web: 16, default: 16 }),
          paddingBottom: Platform.select({ web: 8, default: 0 }),
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: i18n.t('home.title'),
          headerTitle: i18n.t('home.title'),
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: i18n.t('scan.title'),
          headerTitle: i18n.t('scan.title'),
          tabBarIcon: ({ color, size }) => <QrCode size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="wifi"
        options={{
          title: i18n.t('wifi.title'),
          headerTitle: i18n.t('wifi.title'),
          tabBarIcon: ({ color, size }) => <Wifi size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="bluetooth"
        options={{
          title: i18n.t('bluetooth.title'),
          headerTitle: i18n.t('bluetooth.title'),
          tabBarIcon: ({ color, size }) => <Bluetooth size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: i18n.t('settings.title'),
          headerTitle: i18n.t('settings.title'),
          tabBarIcon: ({ color, size }) => <Settings size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
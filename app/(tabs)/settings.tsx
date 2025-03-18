import { View, Text, StyleSheet, Platform } from 'react-native';
import * as Device from 'expo-device';
import i18n from '@/utils/i18n';
import { useTheme } from '@/utils/ThemeContext';
import { theme } from '@/utils/theme';

export default function SettingsScreen() {
  const { isDarkMode } = useTheme();
  const colors = theme[isDarkMode ? 'dark' : 'light'];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text.primary }]}>
        {i18n.t('settings.deviceInfo')}
      </Text>
      <Text style={[styles.info, { color: colors.text.primary }]}>
        {i18n.t('settings.platform')}: {Platform.OS}
      </Text>
      <Text style={[styles.info, { color: colors.text.primary }]}>
        {i18n.t('settings.osVersion')}: {Platform.Version}
      </Text>
      {Platform.OS !== 'web' && (
        <>
          <Text style={[styles.info, { color: colors.text.primary }]}>
            {i18n.t('settings.brand')}: {Device.brand}
          </Text>
          <Text style={[styles.info, { color: colors.text.primary }]}>
            {i18n.t('settings.model')}: {Device.modelName}
          </Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Inter-Bold',
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Inter-Regular',
  },
});
import { Text, View, StyleSheet, Platform } from 'react-native';
import i18n from '@/utils/i18n';
import { useTheme } from '@/utils/ThemeContext';
import { theme } from '@/utils/theme';

export default function ScanScreen() {
  const { isDarkMode } = useTheme();
  const colors = theme[isDarkMode ? 'dark' : 'light'];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {Platform.OS === 'web' ? (
        <View style={styles.webMessage}>
          <Text style={[styles.title, { color: colors.text.primary }]}>
            {i18n.t('scan.title')}
          </Text>
          <Text style={[styles.warning, { color: colors.warning }]}>
            {i18n.t('scan.webWarning')}
          </Text>
          <Text style={[styles.instruction, { color: colors.text.secondary }]}>
            {i18n.t('scan.mobileInstruction')}
          </Text>
        </View>
      ) : (
        <Text style={[styles.text, { color: colors.text.primary }]}>
          QR Scanner will be available here on mobile devices
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  webMessage: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    fontFamily: 'Inter-Bold',
  },
  warning: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'Inter-Regular',
  },
  instruction: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
});
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Header } from '@/components/Header';
import { DrawerMenu } from '@/components/DrawerMenu';
import i18n from '@/utils/i18n';
import { useLanguage } from '@/utils/i18n';
import { useTheme } from '@/utils/ThemeContext';
import { theme } from '@/utils/theme';

type WebSocketStatus = 'idle' | 'sending' | 'receiving' | 'completed' | 'error';

export default function HomeScreen() {
  const [menuVisible, setMenuVisible] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { isDarkMode } = useTheme();
  const [wsStatus, setWsStatus] = useState<WebSocketStatus>('idle');
  const colors = theme[isDarkMode ? 'dark' : 'light'];

  useEffect(() => {
    i18n.locale = language;
  }, [language]);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  const simulateWebSocketCommunication = async () => {
    try {
      setWsStatus('sending');
      await new Promise(resolve => setTimeout(resolve, 1000));

      setWsStatus('receiving');
      await new Promise(resolve => setTimeout(resolve, 1500));

      setWsStatus('completed');
      await new Promise(resolve => setTimeout(resolve, 1000));

      setWsStatus('idle');
    } catch (error) {
      setWsStatus('error');
      setTimeout(() => setWsStatus('idle'), 2000);
    }
  };

  const getStatusColor = () => {
    switch (wsStatus) {
      case 'sending':
        return colors.primary;
      case 'receiving':
        return colors.info;
      case 'completed':
        return colors.success;
      case 'error':
        return colors.error;
      default:
        return colors.text.secondary;
    }
  };

  const getStatusText = () => {
    return i18n.t(`common.wsStatus.${wsStatus}`);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header onMenuPress={() => setMenuVisible(true)} />
      <View style={styles.content}>
        <Text style={[styles.welcome, { color: colors.text.primary }]}>
          {i18n.t('home.welcome')}
        </Text>
        <Text style={[styles.description, { color: colors.text.secondary }]}>
          {i18n.t('home.description')}
        </Text>
        
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={simulateWebSocketCommunication}
          disabled={wsStatus !== 'idle'}
        >
          <Text style={styles.buttonText}>{i18n.t('common.sendMessage')}</Text>
        </TouchableOpacity>

        <View style={[styles.statusContainer, { backgroundColor: colors.surface }]}>
          <View style={[styles.statusIndicator, { backgroundColor: getStatusColor() }]} />
          <Text style={[styles.statusText, { color: getStatusColor() }]}>
            {getStatusText()}
          </Text>
        </View>
      </View>
      <DrawerMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        onLanguageChange={handleLanguageChange}
        isDarkMode={isDarkMode}
        currentLanguage={language}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: 'Inter-Regular',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter-Bold',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    minWidth: 200,
  },
  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Inter-Regular',
  },
});
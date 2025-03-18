import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform, TextInput, TouchableOpacity } from 'react-native';
import * as Device from 'expo-device';
import { useWebSocket } from '@/hooks/useWebSocket';
import i18n from '@/utils/i18n';
import { useTheme } from '@/utils/ThemeContext';
import { theme } from '@/utils/theme';

export default function BluetoothScreen() {
  const [isSupported, setIsSupported] = useState<boolean>(false);
  const [deviceIP, setDeviceIP] = useState('192.168.4.1');
  const { isConnected, error } = useWebSocket(deviceIP);
  const { isDarkMode } = useTheme();
  const colors = theme[isDarkMode ? 'dark' : 'light'];

  useEffect(() => {
    checkBluetoothSupport();
  }, []);

  const checkBluetoothSupport = async () => {
    if (Platform.OS === 'web') {
      setIsSupported(false);
      return;
    }

    const deviceType = await Device.getDeviceTypeAsync();
    setIsSupported(deviceType !== Device.DeviceType.UNKNOWN);
  };

  const handleConnect = () => {
    // ここでESP32へのBluetooth接続処理を実装
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text.primary }]}>
        {i18n.t('bluetooth.title')}
      </Text>

      <View style={styles.statusContainer}>
        <Text style={[styles.statusLabel, { color: colors.text.primary }]}>
          {i18n.t('bluetooth.support')}:
        </Text>
        <Text style={[styles.statusValue, { color: colors.text.primary }]}>
          {i18n.t(isSupported ? 'bluetooth.available' : 'bluetooth.unavailable')}
        </Text>
      </View>

      <View style={styles.deviceContainer}>
        <Text style={[styles.label, { color: colors.text.primary }]}>
          {i18n.t('common.deviceIpAddress')}:
        </Text>
        <TextInput
          style={[styles.input, { 
            borderColor: colors.border,
            backgroundColor: colors.surface,
            color: colors.text.primary
          }]}
          value={deviceIP}
          onChangeText={setDeviceIP}
          placeholder="例: 192.168.4.1"
          placeholderTextColor={colors.text.disabled}
        />
      </View>

      <View style={styles.connectionStatus}>
        <Text style={[
          styles.statusText,
          { color: isConnected ? colors.success : colors.error }
        ]}>
          {i18n.t(isConnected ? 'common.connected' : 'common.disconnected')}
        </Text>
        {error && <Text style={[styles.errorText, { color: colors.error }]}>{error}</Text>}
      </View>

      <TouchableOpacity 
        style={[styles.connectButton, { backgroundColor: colors.primary }]}
        onPress={handleConnect}
      >
        <Text style={styles.buttonText}>{i18n.t('common.connect')}</Text>
      </TouchableOpacity>

      {Platform.OS === 'web' && (
        <Text style={[styles.warning, { color: colors.warning }]}>
          {i18n.t('bluetooth.webWarning')}
        </Text>
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
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  statusLabel: {
    fontSize: 16,
    marginRight: 10,
    fontFamily: 'Inter-Regular',
  },
  statusValue: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Inter-Regular',
  },
  deviceContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontFamily: 'Inter-Regular',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
  connectionStatus: {
    alignItems: 'center',
    marginVertical: 20,
  },
  statusText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
    fontFamily: 'Inter-Regular',
  },
  errorText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
  connectButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter-Bold',
  },
  warning: {
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
  },
});
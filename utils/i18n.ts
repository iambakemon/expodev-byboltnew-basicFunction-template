import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';
import { createContext, useContext } from 'react';

export const LanguageContext = createContext({
  language: Localization.locale.split('-')[0],
  setLanguage: (lang: string) => {},
});

export const useLanguage = () => useContext(LanguageContext);

const i18n = new I18n({
  en: {
    common: {
      connect: 'Connect',
      disconnect: 'Disconnect',
      connected: 'Connected',
      disconnected: 'Disconnected',
      connectionError: 'Connection Error',
      deviceIpAddress: 'Device IP Address',
      webLimitation: 'Some features are limited in web environment',
      sendMessage: 'Send Test Message',
      wsStatus: {
        idle: 'Ready to communicate',
        sending: 'Sending data...',
        receiving: 'Receiving response...',
        completed: 'Communication completed',
        error: 'Communication error'
      }
    },
    home: {
      title: 'Home',
      welcome: 'Welcome to Smart Device Controller',
      description: 'Control your IoT devices with ease',
    },
    scan: {
      title: 'QR Scan',
      webWarning: 'QR code scanning is not available in web browsers',
      mobileInstruction: 'Use the mobile app to scan QR codes',
    },
    wifi: {
      title: 'Wi-Fi',
      connectionType: 'Connection Type',
      status: 'Status',
      connect: 'Connect to Wi-Fi',
      webWarning: 'Some Wi-Fi features are limited in web environment',
    },
    bluetooth: {
      title: 'Bluetooth',
      support: 'Bluetooth Support',
      available: 'Available',
      unavailable: 'Unavailable',
      webWarning: 'Bluetooth features are not available in web environment',
    },
    settings: {
      title: 'Settings',
      deviceInfo: 'Device Information',
      platform: 'Platform',
      osVersion: 'OS Version',
      brand: 'Brand',
      model: 'Model',
    },
    menu: {
      title: 'Menu',
      language: 'Language',
      theme: 'Theme',
      lightMode: 'Light Mode',
      darkMode: 'Dark Mode',
    },
    footer: {
      home: 'Home',
      scan: 'QR Scan',
      wifi: 'Wi-Fi',
      bluetooth: 'Bluetooth',
      settings: 'Settings',
    },
  },
  ja: {
    common: {
      connect: '接続',
      disconnect: '切断',
      connected: '接続済み',
      disconnected: '未接続',
      connectionError: '接続エラー',
      deviceIpAddress: 'デバイスのIPアドレス',
      webLimitation: 'Web環境では一部機能が制限されます',
      sendMessage: 'メッセージを送信する',
      wsStatus: {
        idle: '通信待機中',
        sending: 'データ送信中...',
        receiving: 'レスポンス受信中...',
        completed: '通信完了',
        error: '通信エラー'
      }
    },
    home: {
      title: 'ホーム',
      welcome: 'スマートデバイスコントローラーへようこそ',
      description: 'IoTデバイスを簡単に制御',
    },
    scan: {
      title: 'QRスキャン',
      webWarning: 'Webブラウザではスキャン機能を利用できません',
      mobileInstruction: 'モバイルアプリでQRコードをスキャンしてください',
    },
    wifi: {
      title: 'Wi-Fi',
      connectionType: '接続タイプ',
      status: '状態',
      connect: 'Wi-Fiに接続',
      webWarning: 'Web環境では一部のWi-Fi機能が制限されます',
    },
    bluetooth: {
      title: 'Bluetooth',
      support: 'Bluetoothサポート',
      available: '利用可能',
      unavailable: '利用不可',
      webWarning: 'Web環境ではBluetooth機能は利用できません',
    },
    settings: {
      title: '設定',
      deviceInfo: 'デバイス情報',
      platform: 'プラットフォーム',
      osVersion: 'OSバージョン',
      brand: 'ブランド',
      model: 'モデル',
    },
    menu: {
      title: 'メニュー',
      language: '言語',
      theme: 'テーマ',
      lightMode: 'ライトモード',
      darkMode: 'ダークモード',
    },
    footer: {
      home: 'ホーム',
      scan: 'QRスキャン',
      wifi: 'Wi-Fi',
      bluetooth: 'Bluetooth',
      settings: '設定',
    },
  },
});

export const updateLocale = (locale: string) => {
  i18n.locale = locale;
};

i18n.enableFallback = true;

export default i18n;
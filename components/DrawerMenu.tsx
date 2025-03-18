import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
import { Globe, Moon, Sun, X } from 'lucide-react-native';
import i18n from '@/utils/i18n';
import { useTheme } from '@/utils/ThemeContext';
import { theme } from '@/utils/theme';

export function DrawerMenu({ 
  visible, 
  onClose,
  onLanguageChange,
  currentLanguage,
}: { 
  visible: boolean;
  onClose: () => void;
  onLanguageChange: (lang: string) => void;
  currentLanguage: string;
}) {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const colors = theme[isDarkMode ? 'dark' : 'light'];

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === 'en' ? 'ja' : 'en';
    onLanguageChange(newLanguage);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable 
          style={[
            styles.drawer,
            { backgroundColor: colors.background }
          ]} 
          onPress={e => e.stopPropagation()}
        >
          <View style={[styles.drawerHeader, { borderBottomColor: colors.border }]}>
            <Text style={[styles.drawerTitle, { color: colors.text.primary }]}>
              {i18n.t('menu.title')}
            </Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <X size={24} color={colors.text.primary} />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={handleLanguageChange}
          >
            <Globe size={24} color={colors.text.primary} />
            <Text style={[styles.menuText, { color: colors.text.primary }]}>
              {currentLanguage === 'en' ? '日本語に切り替え' : 'Switch to English'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => {
              setIsDarkMode(!isDarkMode);
              onClose();
            }}
          >
            {isDarkMode ? (
              <Sun size={24} color={colors.text.primary} />
            ) : (
              <Moon size={24} color={colors.text.primary} />
            )}
            <Text style={[styles.menuText, { color: colors.text.primary }]}>
              {i18n.t(isDarkMode ? 'menu.lightMode' : 'menu.darkMode')}
            </Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawer: {
    width: '80%',
    height: '100%',
    padding: 20,
  },
  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  drawerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
  },
  closeButton: {
    padding: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  menuText: {
    marginLeft: 15,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
});
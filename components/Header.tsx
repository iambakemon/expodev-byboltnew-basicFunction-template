import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Menu } from 'lucide-react-native';
import { useTheme } from '@/utils/ThemeContext';
import { theme } from '@/utils/theme';

export function Header({ onMenuPress }: { onMenuPress: () => void }) {
  const { isDarkMode } = useTheme();
  const colors = theme[isDarkMode ? 'dark' : 'light'];

  return (
    <View style={[styles.header, { backgroundColor: colors.background }]}>
      <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
        <Menu size={24} color={colors.text.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  menuButton: {
    padding: 8,
  },
});
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';
import { Platform } from 'react-native';

export const hapticsLight = () =>
  Platform.OS !== 'web' && impactAsync(ImpactFeedbackStyle.Light);

export const hapticsHeavy = () =>
  Platform.OS !== 'web' && impactAsync(ImpactFeedbackStyle.Heavy);

export const hapticsMedium = () =>
  Platform.OS !== 'web' && impactAsync(ImpactFeedbackStyle.Medium);

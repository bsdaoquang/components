import type { ReactNode } from 'react';

export interface MenuItem {
  key: string | number;
  label?: string;
  onPress?: () => void;
  icon?: ReactNode;
  disable?: boolean;
  danger?: boolean;
}

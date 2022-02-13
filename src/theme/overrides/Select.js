import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

export default function Select() {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: <Icon icon="ic:baseline-expand-more" />
      },

      styleOverrides: {
        root: {}
      }
    }
  };
}

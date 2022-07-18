const colors = {
  gray100: "#f5f5f5",
  gray200: "#e4e4e4",
  gray300: "#c1c4cb",
  gray400: "#7c8187",
  gray500: "#5a6069",
  gray600: "#35393f",
  gray700: "#2b2d31",
  gray800: "#1d1f22",
  gray900: "#151619",
  white: "#ffffff",
  orange300: "#f39765",
  orange400: "#e46643",
};

const fonts = {
  mono: 'Roboto Mono, system-ui, -apple-system, BlinkMacSystemFont, "Lucida Console", "Courier New", monospace',
  serif:
    'Roboto Slab, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  sans: "Roboto, system-ui, -apple-system, BlinkMacSystemFont, serif",
};

function getTheme(isDark: boolean) {
  return { colors, fonts };
}

export default getTheme;

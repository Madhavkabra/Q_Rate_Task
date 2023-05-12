import theme from '@/src/theme';
import { ThemeProvider } from '../components/Mui';
import PropTypes from 'prop-types';

export default function RootLayout({ children }) {
  return (
    <html>
      <ThemeProvider theme={theme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

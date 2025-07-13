import '../styles/global.scss'
import { I18nextProvider } from 'react-i18next';
const i18n = require('../i18n/i18n.js');

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

module.exports = MyApp;

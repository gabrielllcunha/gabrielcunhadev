import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

export function LanguageSwitcher() {
  const { i18n } = useTranslation('pages');

  const handleLangSwitch = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  const current = i18n.language;

  return (
    <div className={styles.container}>
      <button
        onClick={() => handleLangSwitch('en')}
        className={`${styles.button} ${current === 'en' ? styles.active : styles.inactive}`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className={styles.separator}>/</span>
      <button
        onClick={() => handleLangSwitch('pt')}
        className={`${styles.button} ${current === 'pt' ? styles.active : styles.inactive}`}
        aria-label="Switch to Portuguese"
      >
        PT
      </button>
    </div>
  );
} 
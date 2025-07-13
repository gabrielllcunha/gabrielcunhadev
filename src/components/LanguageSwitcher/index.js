import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export function LanguageSwitcher() {
  const { i18n } = useTranslation('pages');
  const [current, setCurrent] = useState(i18n.language);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const savedLang = localStorage.getItem('lang');
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
      setCurrent(savedLang);
    } else {
      setCurrent(i18n.language);
    }
  }, [i18n, isClient]);

  useEffect(() => {
    if (!isClient) return;
    setCurrent(i18n.language);
  }, [i18n.language, isClient]);

  const handleLangSwitch = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
    setCurrent(lang);
  };

  if (!isClient) {
    return (
      <div className={styles.container}>
        <button className={`${styles.button} ${styles.inactive}`}>EN</button>
        <span className={styles.separator}>/</span>
        <button className={`${styles.button} ${styles.inactive}`}>PT</button>
      </div>
    );
  }

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
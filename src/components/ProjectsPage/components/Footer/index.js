import Link from "next/link";
import styles from "../../styles.module.scss";
import { useTranslation } from "react-i18next";

export function Footer() {
    const { t } = useTranslation('pages');

    return (
        <footer className={styles.footer}>
            <div className="container">
                <h2 className={styles.titleFooter}>{t('projectsPage.get_in_touch')} 📩</h2>
                <div className={styles.linksContainer}>
                    <Link
                        href="mailto:gabrielcunhasantos01@gmail.com?subject=/jobs"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <a className={styles.btn}>{t('projectsPage.send_email')}</a>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

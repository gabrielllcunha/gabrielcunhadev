import Link from "next/link";
import styles from "../styles.module.scss";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <h2 className={styles.titleFooter}>Get in Touch! 📩</h2>
                <div className={styles.linksContainer}>
                    <Link
                        href="mailto:gabrielcunhasantos01@gmail.com?subject=/jobs"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <a className={styles.btn}>Send Email</a>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

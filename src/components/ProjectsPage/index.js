import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import { AiOutlineCheck, AiOutlineLeft } from "react-icons/ai";
import { ProjectItem } from "./components/ProjectItem";
import { Footer } from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useRouter } from 'next/router';

import SetembroAmareloWebsite from "./../../../public/images/website2.png";
import AlanGomesWebsite from "./../../../public/images/website1.png";
import PersonalWebsite from "./../../../public/images/website0.png";

export function ProjectsPage() {
  const { t, i18n } = useTranslation('pages');
  const router = useRouter();

  useEffect(() => {
    AOS.init();
    const savedLang = typeof window !== 'undefined' && localStorage.getItem('lang');
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <>
      <div className={styles.container}>
        <LanguageSwitcher />
        <Link href="/">
          <a data-aos="fade-up" data-aos-delay="200" className={styles.btn}>
            <AiOutlineLeft size={18} />
          </a>
        </Link>

        <h1 data-aos="fade-up" data-aos-delay="300" className={styles.title}>
          {t('projectsPage.portfolio')}
        </h1>
        <p data-aos="fade-up" data-aos-delay="400" className={styles.desc}>
          {t('projectsPage.projects_desc')}
        </p>

        <ProjectItem
          title={t('projectsPage.alan_gomes')}
          imageSrc={AlanGomesWebsite}
          alt="Alan Gomes Website"
          info={[
            t('projectsPage.alan_gomes_info_1'),
            t('projectsPage.alan_gomes_info_2'),
            t('projectsPage.alan_gomes_info_3'),
          ]}
          projectLink="https://alancarlosarq.vercel.app/"
        />
        <ProjectItem
          title={t('projectsPage.setembro_amarelo')}
          imageSrc={SetembroAmareloWebsite}
          alt="Setembro Amarelo Website"
          info={[
            t('projectsPage.setembro_amarelo_info_1'),
            t('projectsPage.setembro_amarelo_info_2'),
          ]}
          projectLink="https://setembro-amarelo-website.vercel.app/"
        />
        <ProjectItem
          title={
            <>
              {t('projectsPage.my_website')}{' '}
              <small style={{ fontSize: 12, color: 'gray' }}>{t('projectsPage.my_website_subtitle')}</small>
            </>
          }
          imageSrc={PersonalWebsite}
          alt="My Website"
          info={[
            t('projectsPage.my_website_info_1'),
            t('projectsPage.my_website_info_2'),
          ]}
          projectLink="https://gabrielcunhadev.vercel.app/"
        />
      </div>
      <Footer />
    </>
  );
}

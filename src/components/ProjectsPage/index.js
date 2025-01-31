import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import { AiOutlineCheck, AiOutlineLeft } from "react-icons/ai";
import { ProjectItem } from "./components/ProjectItem";
import { Footer } from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

import SetembroAmareloWebsite from "./../../../public/images/website2.png";
import AlanGomesWebsite from "./../../../public/images/website1.png";
import PersonalWebsite from "./../../../public/images/website0.png";

export function ProjectsPage() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div className={styles.container}>
        <Link href="/">
          <a data-aos="fade-up" data-aos-delay="200" className={styles.btn}>
            <AiOutlineLeft size={18} />
          </a>
        </Link>

        <h1 data-aos="fade-up" data-aos-delay="300" className={styles.title}>
          Portfolio
        </h1>
        <p data-aos="fade-up" data-aos-delay="400" className={styles.desc}>
          Here are some of my web projects made using the latest technologies.
        </p>

        <ProjectItem
          title="Alan Gomes"
          imageSrc={AlanGomesWebsite}
          alt="Alan Gomes Website"
          info={[
            "Personal Portfolio",
            "Contact Form",
            "Made with Bootstrap, jQuery, HTML, CSS, and JS",
          ]}
          projectLink="https://alancarlosarq.vercel.app/"
        />
        <ProjectItem
          title="Setembro Amarelo"
          imageSrc={SetembroAmareloWebsite}
          alt="Setembro Amarelo Website"
          info={[
            "Informational Website",
            "Made with Bootstrap, HTML, CSS, and JS",
          ]}
          projectLink="https://setembro-amarelo-website.vercel.app/"
        />
        <ProjectItem
          title="My Website"
          imageSrc={PersonalWebsite}
          alt="Personal Website"
          info={[
            "Personal Portfolio",
            "Made with NextJS and Sass",
          ]}
          projectLink="https://gabrielcunhadev.vercel.app/"
        />
      </div>
      <Footer />
    </>
  );
}

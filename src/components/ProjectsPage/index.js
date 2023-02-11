import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import { AiOutlineCheck, AiOutlineLeft } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
          Here's some of my web projects made using the latests technologies.
        </p>

        <Image
          src={AlanGomesWebsite}
          alt="Alan Gomes Website"
          width={1089}
          height={710}
          unoptimized={true}
          objectFit="contain"
          style={{ paddingTop: "40px !important" }}
          data-aos="fade-up"
          data-aos-delay="500"
        />
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className={styles.containerDesc}
        >
          <h3>Alan Gomes</h3>
          <div className={styles.checkIcon}>
            <AiOutlineCheck />
            <p>Personal Portfolio</p>
          </div>
          <div className={styles.checkIcon}>
            <AiOutlineCheck />
            <p>Contact Form</p>
          </div>
          <div className={styles.checkIcon}>
            <AiOutlineCheck />
            <p>Made with Bootstrap, jQuery, HTML, CSS and JS</p>
          </div>
          <Link
            href="https://acgportfolio.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <a className={styles.btn}>Have a Peek 👀</a>
          </Link>
        </div>

        <Image
          src={SetembroAmareloWebsite}
          alt="Setembro Amarelo Website"
          width={1089}
          height={710}
          unoptimized={true}
          objectFit="contain"
          style={{ paddingTop: "40px !important" }}
          data-aos="fade-up"
          data-aos-delay="500"
        />
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className={styles.containerDesc}
        >
          <h3>Setembro Amarelo</h3>
          <div className={styles.checkIcon}>
            <AiOutlineCheck />
            <p>Informational Website</p>
          </div>
          <div className={styles.checkIcon}>
            <AiOutlineCheck />
            <p>Made with Bootstrap, HTML, CSS and JS</p>
          </div>
          <Link
            href="https://setembro-amarelo-website.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <a className={styles.btn}>Have a Peek 👀</a>
          </Link>
        </div>

        <Image
          src={PersonalWebsite}
          alt="Personal Website"
          width={1089}
          height={710}
          unoptimized={true}
          objectFit="contain"
          style={{ paddingTop: "40px !important" }}
          data-aos="fade-up"
          data-aos-delay="500"
        />
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className={styles.containerDesc}
        >
          <h3>My Website <small style={{fontSize: 12, color: 'gray'}}>(you're in it)</small></h3>
          <div className={styles.checkIcon}>
            <AiOutlineCheck />
            <p>Personal Portfolio</p>
          </div>
          <div className={styles.checkIcon}>
            <AiOutlineCheck />
            <p>Made with NextJS and Sass</p>
          </div>
          <Link
            href="https://gabrielcunhadev.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <a className={styles.btn}>Have a Peek 👀</a>
          </Link>
        </div>
      </div>

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
    </>
  );
}

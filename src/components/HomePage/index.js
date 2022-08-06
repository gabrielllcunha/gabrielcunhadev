import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import profile from "./../../../public/images/profile.png";
import {
  AiOutlineGithub,
  AiOutlineBehance,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function HomePage() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div className={styles.cardSolo}>
        <div className={styles.gradient}>
          <div className={styles.gradientPart1}></div>
          <div className={styles.gradientPart2}></div>
          <div className={styles.gradientPart3}></div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <div
              data-aos="fade-down"
              data-aos-delay="300"
              className={styles.cardPerson}
            >
              <Image
                src={profile}
                alt="Profile"
                className={styles.image}
                width={120}
                height={120}
                unoptimized={true}
                objectFit="cover"
              />

              <h2 className={styles.title}>Gabriel Cunha</h2>
              <h4 className={styles.subtitle}>Front-End Developer & UI/UX Designer</h4>

              <Link href="/projects">
                <a className={styles.btn}>My Projects</a>
              </Link>

              <div className={styles.icons}>
                <a
                  href="https://www.linkedin.com/in/gabrielllcunha/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLinkedin size={24} />
                </a>

                <a
                  href="https://github.com/gabrielllcunha"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub size={24} />
                </a>

                <a
                  href="mailto:gabrielcunhasantos01@gmail.com?subject=/job/gcswebsite"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineMail size={24} />
                </a>

                <a
                  href="https://www.behance.net/gabrielllcunha"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineBehance size={24} />
                </a>

                {/* <a
                  href="https://api.whatsapp.com/send?phone=5545999061288&"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineWhatsApp size={24} />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

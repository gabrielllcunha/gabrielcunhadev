import Image from "next/image";
import Link from "next/link";
import { AiOutlineCheck } from "react-icons/ai";
import styles from "../styles.module.scss";

export function ProjectItem({ title, imageSrc, alt, info, projectLink }) {
    return (
        <>
            <Image
                src={imageSrc}
                alt={alt}
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
                <h3>{title}</h3>
                {info.map((desc, index) => (
                    <div key={index} className={styles.checkIcon}>
                        <AiOutlineCheck />
                        <p>{desc}</p>
                    </div>
                ))}
                <Link href={projectLink} target="_blank" rel="noreferrer">
                    <a className={styles.btn}>Have a Peek 👀</a>
                </Link>
            </div>
        </>
    );
}

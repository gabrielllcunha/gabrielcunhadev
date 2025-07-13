import Head from "next/head";
import { ProjectsPage } from "../components/ProjectsPage";

export default function Projects() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Gabriel Cunha</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ProjectsPage />
    </>
  );
}
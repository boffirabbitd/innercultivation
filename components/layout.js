import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Metadata from "./Metadata";
import Headerhome from "./Headerhome";
import HeaderNonHome from "./HeaderNonHome";

import profilePic1 from "../public/profile.jpg";
import profilePic2 from "../public/profile2.jpg";
import profilePic3 from "../public/profile3.jpg";

function chooseProfilePic() {
  const pics = [profilePic1, profilePic2, profilePic3];
  const randomIndex = Math.floor(Math.random() * pics.length);
  return pics[randomIndex];
}

const profilePic = chooseProfilePic();

const name = "yummy cultivation";
export const siteTitle = "innercultivation";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <Metadata siteTitle={"blog"} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <Headerhome profilePic={profilePic} name={name} />
        ) : (
          <HeaderNonHome profilePic={profilePic} />
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">Back to home</Link>
        </div>
      )}
    </div>
  );
}

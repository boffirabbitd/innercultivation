import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

//define name
const name = "yummy cultivation";

const HeaderNonHome = ({ profilePic }) => {
  return (
    <>
      <Link href="/">
        <Image
          priority
          src={profilePic}
          className={utilStyles.borderCircle}
          height={108}
          width={108}
          alt=""
        />
      </Link>
      <h2 className={utilStyles.headingLg}>
        <Link href="/" className={utilStyles.colorInherit}>
          {name}
        </Link>{" "}
      </h2>
    </>
  );
};

export default HeaderNonHome;

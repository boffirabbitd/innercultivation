import React from "react";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

const Headerhome = ({ profilePic, name }) => {
  return (
    <>
      <Image
        priority
        src={profilePic}
        className={utilStyles.borderCircle}
        height={144}
        width={144}
        alt=""
      />
      <h1 className={utilStyles.heading2Xl}>{name}</h1>{" "}
    </>
  );
};

export default Headerhome;

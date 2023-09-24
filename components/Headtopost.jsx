//create a function for a react component called Blogpost that has title and text
import utilStyles from "../styles/utils.module.css";

export default function Blogpost({ title, text, href }) {
  return (
    <a href={href}>
      <div className={utilStyles.homeToPostContainer}>
        <h1 className={utilStyles.headingMd}>{title}</h1>
        <p className={utilStyles.text}>{text}</p>
      </div>
    </a>
  );
}

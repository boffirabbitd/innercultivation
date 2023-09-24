import path from "path";
import fs from "fs/promises";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import ReactMarkdown from "react-markdown";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public", "first-post.txt");
  const text = await fs.readFile(filePath, "utf-8");

  return {
    props: {
      text,
    },
    revalidate: 10, // regenerate the page every 10 seconds
  };
}

const title = "Ignorance builds the world";

export default function FirstPost({ text }) {
  return (
    <Layout>
      <h1 className={utilStyles.headingMd}>{title}</h1>
      <ReactMarkdown className={utilStyles.text}>{text}</ReactMarkdown>
    </Layout>
  );
}

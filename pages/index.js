import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Headtopost from "../components/Headtopost";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Headtopost
        href={"./posts/first-post"}
        title="ignorance builds the world"
        text="transformation hurts, make peace with it and cultivate"
      />
    </Layout>
  );
}

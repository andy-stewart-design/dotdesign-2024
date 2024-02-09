import { getCollection } from "astro:content";
import PostCard from "./PostCard";
import classes from "./component.module.css";
import { AlertBar, Footer } from "@components/global";

type PostCollection = Awaited<ReturnType<typeof getCollection>>;

type PropTypes = {
  posts: PostCollection;
};

export default function PostGrid({ posts }: PropTypes) {
  return (
    <main class={classes.main}>
      <AlertBar />
      <section class={classes.grid}>
        {posts.map(({ slug, data }) => (
          <PostCard slug={slug} data={data} />
        ))}
      </section>
      <Footer />
    </main>
  );
}

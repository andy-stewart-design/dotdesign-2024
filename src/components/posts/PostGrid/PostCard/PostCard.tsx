import { getCollection } from "astro:content";
import classes from "./component.module.css";

async function getEntry() {
  const allPosts = await getCollection("posts");
  return allPosts[0].data;
}

type PostEntry = Awaited<ReturnType<typeof getEntry>>;

type PropTypes = {
  data: PostEntry;
  slug: string;
};

export default function PostCard({ data, slug }: PropTypes) {
  const date = data.pubDate.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <a class={classes.card} href={`/posts/${slug}`}>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <section>
        <ul role="list">
          {data.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
        <time>{date}</time>
      </section>
    </a>
  );
}

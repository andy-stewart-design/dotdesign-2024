import classes from "./component.module.css";

type PropTypes = {
  entry: {
    title: string;
    pubDate: Date;
    description: string;
    image: {
      url: string;
      alt: string;
    };
    tags: string[];
  };
};

export default function PostHero(props: PropTypes) {
  const { entry } = props;

  const date = entry.pubDate.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header class={classes.header}>
      <a href="/posts">
        <span>←</span> All Posts
      </a>
      <section>
        <h1>{entry.title}</h1>
        <p>{entry.description}</p>
        <div class={classes.metadata}>
          <time>{date}</time>
          <ul role="list">
            {entry.tags.map((tag) => (
              <li>{tag}</li>
            ))}
          </ul>
        </div>
      </section>
    </header>
  );
}

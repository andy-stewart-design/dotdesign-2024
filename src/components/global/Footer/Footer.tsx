import classes from "./component.module.css";

const links = [
  {
    text: "Portfolio",
    href: "https://andystewart.design",
  },
  {
    text: "LinkedIn",
    href: "https://codepen.io/andystewartdesign",
  },
  {
    text: "Github",
    href: "https://github.com/andy-stewart-design",
  },
  {
    text: "Codepen",
    href: "https://codepen.io/andystewartdesign",
  },
];

export default function Footer() {
  return (
    <footer class={classes.footer}>
      <section>
        <ul role="list">
          {links.map((link) => (
            <a href={link.href} target="_blank">
              {link.text} <span>↗</span>
            </a>
          ))}
          <li></li>
        </ul>
      </section>
    </footer>
  );
}

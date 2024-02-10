import type { ImageMetadata } from "astro";
import type { Component, JSX } from "solid-js";

type ComponentProps = {
  src: ImageMetadata;
  alt: string;
} & JSX.HTMLAttributes<HTMLImageElement>;

const Image: Component<ComponentProps> = (props) => {
  const { src, width, height } = props.src;

  return <img src={src} alt={props.alt} width={width} height={height} />;
};

export default Image;

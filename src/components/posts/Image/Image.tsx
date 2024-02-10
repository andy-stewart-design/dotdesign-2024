import type { ImageMetadata } from "astro";
// import { getImage } from "astro:assets";
import type { Component, JSX } from "solid-js";

type ComponentProps = {
  src: ImageMetadata;
  alt: string;
} & JSX.HTMLAttributes<HTMLImageElement>;

const Image: Component<ComponentProps> = (props) => {
  const { src, width, height } = props.src;

  // const image = await getImage({ src, width: size, format });

  return <img src={src} alt={props.alt} width={width} height={height} />;
};

export default Image;

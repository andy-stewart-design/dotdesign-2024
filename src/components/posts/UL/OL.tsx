import type { ParentComponent } from "solid-js";

const OL: ParentComponent = (props) => {
  return <ol role="list">{props.children}</ol>;
};

export default OL;

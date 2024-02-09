import type { ParentComponent } from "solid-js";

const UL: ParentComponent = (props) => {
  return <ul role="list">{props.children}</ul>;
};

export default UL;

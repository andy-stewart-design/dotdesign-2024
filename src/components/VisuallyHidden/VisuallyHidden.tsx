import { mergeProps, type ParentComponent } from "solid-js";
import { Dynamic } from "solid-js/web";
import classes from "./component.module.css";

type PropTypes = {
  as?: "div" | "span";
};

const VisuallyHidden: ParentComponent<PropTypes> = (props) => {
  const merged = mergeProps({ as: "div" }, props);

  return (
    <Dynamic component={merged.as} class={classes.hidden}>
      {props.children}
    </Dynamic>
  );
};

export default VisuallyHidden;

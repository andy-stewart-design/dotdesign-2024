import classes from "./component.module.css";

export default function AlertBar() {
  return (
    <div class={classes.alert}>
      <p>
        <b>Bless the mess!</b> This site is being built as you read it. LMK if
        something looks weird.
      </p>
    </div>
  );
}

import clsx from "clsx";
import styles from "./button.module.scss";

export const Button = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
  }
) => {
  return (
    <button
      {...props}
      className={clsx(styles[props.variant || "primary"], props.className)}
    >
      Click
    </button>
  );
};

import { cn } from "../../../lib/utils";


type SecondaryButtonProps = {
  title: string;
  state?: "hover" | "disabled";
};
const SecondaryButton = ({ state, title }: SecondaryButtonProps) => {
  return (
    <button
      disabled={state === "disabled"}
      type="button"
      className={cn(
        `btn-secondary secondary-light font-semibold transition-all duration-300 ease-in-out`, // base button style

        {
          "hover:secondary-hover": state === "hover",
          "secondary-disabled": state === "disabled",
        },
      )}
    >
      {title}
    </button>
  );
};

export default SecondaryButton;

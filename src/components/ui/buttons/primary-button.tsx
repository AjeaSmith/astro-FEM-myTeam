import { cn } from "../../../lib/utils";


type PrimaryButtonProps = {
  mode: "dark" | "light";
  title: string;
  state?: "hover" | "disabled";
  className?: string;
};
const PrimaryButton = ({
  mode,
  state,
  title,
  className,
}: PrimaryButtonProps) => {
  return (
    <button
      disabled={
        (mode === "dark" && state === "disabled") ||
        (mode === "light" && state === "disabled")
      }
      type="button"
      className={cn(
        `btn-primary ${mode}-normal font-semibold transition-all duration-300 ease-in-out`, // base button style

        {
          "hover:dark-hover": mode === "dark" && state === "hover",
          "hover:light-hover": mode === "light" && state === "hover",
          "dark-disabled": mode === "dark" && state === "disabled",
          "light-disabled": mode === "light" && state === "disabled",
        },
        className,
      )}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;

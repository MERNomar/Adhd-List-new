import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Arrow({ state }) {
  return (
    <span className="">
      {state ? <KeyboardArrowRightIcon /> : <KeyboardArrowDownIcon />}
    </span>
  );
}

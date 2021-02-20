import Link from "next/link";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { withStyles } from "@material-ui/core/styles";

const BackButton = withStyles({
  root: {
    color: "white",
    position: "absolute",
    top: "10px",
    left: "10px",
  }
})(Button)

export default function HomeButton() {
  return (
    <BackButton
      startIcon={<KeyboardArrowLeftIcon />}
    >
      <Link href="/">Home</Link>
    </BackButton>
  )
}
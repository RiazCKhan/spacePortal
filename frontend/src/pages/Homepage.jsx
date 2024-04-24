import "../styles/homepageStyles.css";
import { CssBaseline } from "@mui/material";
import Header from "../components/Header";

export default function Homepage() {
  return (
    <div className="landing">
      <CssBaseline />
      <Header />
    </div>
  );
}

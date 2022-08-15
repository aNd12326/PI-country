import { Link } from "react-router-dom";
import landing from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={landing.containerLanding}>
      <Link to="/home">
        <button className={landing.btnLanding}>Home</button>
      </Link>
    </div>
  );
}

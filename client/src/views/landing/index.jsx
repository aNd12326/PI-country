import { Link } from "react-router-dom";
import landing from "./Landing.module.css";

export default function Landing() {
  return (
    <>
      <h1 className="titleFirst">Countries App</h1>
      <div className={landing.containerLanding}>
        <Link to="/home">
          <button className={landing.btnLanding}>Home</button>
        </Link>
      </div>
    </>
  );
}

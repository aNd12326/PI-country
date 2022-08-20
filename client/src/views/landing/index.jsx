import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="container-xl">
      <div className="row align-items-center justify-content-center vh-100">
        <div className="badge bg-secondary p-3">
          <h1 className="text-center fw-bold">Countries App</h1>
          <Link to="/home">
            <div className="d-flex p-2 align-items-center justify-content-center align-content-center">
              <button className="btn btn-primary ">Home</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

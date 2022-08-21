import React from "react";

export default function Error() {
  return (
    <div className="text-center p-5">
      <button className="btn btn-primary px-5 py-3" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        <h2>Loading countries...</h2>
      </button>
    </div>
  );
}

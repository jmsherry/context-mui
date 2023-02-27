import React from "react";

function Display({
  email = "Not provided",
  age = "Not Provided",
  username = "Not Provided",
}) {
  return (
    <>
      <h1>Form Page</h1>
      <dl className="data">
        <dt>Username</dt>
        <dd>{username}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
        <dt>Email</dt>
        <dd>{email}</dd>
      </dl>
    </>
  );
}

export default Display;

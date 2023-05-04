import React from "react";

const Registration = () => {
  return (
    <div>
      <h2>Please Register</h2>
      <form>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="password" name="password" />
        <input type="PhotoUrl" name="photourl" />
      </form>
    </div>
  );
};

export default Registration;

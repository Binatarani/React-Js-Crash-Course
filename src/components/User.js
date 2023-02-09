import React from "react";

const User = (props) => {
  return (
    <>
      <h2>User Name:{props.userName}</h2>
      <h2>User Id:{props.userId}</h2>
    </>
  );
};

export default User;

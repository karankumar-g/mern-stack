import React from "react";
import { useSelector } from "react-redux";

const ShowUserList = () => {
  const { users, status, error } = useSelector((state) => state.user);

  return (
    <div style={{ padding: "50px" }}>
      <h1>User List</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" &&
        users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <p>Email: {user.email}</p>
            <img
              src={user.avatar}
              alt={user.first_name}
              style={{ borderRadius: "50%" }}
            />
          </div>
        ))}
    </div>
  );
};

export default ShowUserList;

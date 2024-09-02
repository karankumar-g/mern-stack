import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../redux/userSlice";

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Fetching Users...</h1>
    </div>
  );
};

export default UserList;

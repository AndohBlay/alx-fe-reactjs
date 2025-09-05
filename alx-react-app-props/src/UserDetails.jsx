import {useContext} from "react";

import UserContext from "../src/Context/UserContext";
function UserDetails() {
const userData = useContext(useContext);
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
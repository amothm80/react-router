import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      <Outlet />
      <hr />
      <Link to="/">Click here to go back</Link>
    </div>
  );
};

export default Profile;

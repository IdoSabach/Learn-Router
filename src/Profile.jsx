import { Outlet , Link} from "react-router-dom";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import PageOne from "./PageOne";

const Profile = () => {
  return (
    <div>
      
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      <Outlet />
      <Spinach />
      <Popeye />
      
    </div>
  );
};

export default Profile;

import "./App.css";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"

const App = () => {
  return (
    <div className="w-auto flex flex-col justify-center content-center"> 
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
           <Link to="profile"><Button> Profile page</Button></Link>
          </li>
          <li>
           <Link to="popover"><Button> Popover Demo page</Button></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;

import { Link } from "react-router-dom";
import "./notFound.scss";

const NotFound = () => {
  return (
    <div className='notFound'>
      <p>
        Page not found go back to <Link to={"/"}>Home Page...</Link>
      </p>
    </div>
  );
};

export default NotFound;

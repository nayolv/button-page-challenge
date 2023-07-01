import { Link } from "react-router-dom";
import "../sass/errorPage/errorPage.scss";
import popCat from "../assets/pop-cat.gif";

export default function ErrorPage() {
  return (
    <div className="error-page-container" id="error-page">
      <div>
        <img height="200px" src={popCat} alt="Mi Imagen" />
        <h1>Oops!</h1>
        <p>Sorry, no one is here.</p>

        <p>
          Why not try back to the <Link to="/">homepage</Link>?
        </p>
      </div>
    </div>
  );
}

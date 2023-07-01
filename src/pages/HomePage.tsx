import "../sass/homePage/homePage.scss";
import underConstruction from "../assets/under-construction.gif";

export const HomePage = () => {
  return (
    <div className="homepage-container">
      <div>
        <p>Page under construction</p>
        <img src={underConstruction} alt="" />
      </div>
    </div>
  );
};

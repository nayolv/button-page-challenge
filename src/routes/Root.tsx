import { Link, Outlet } from "react-router-dom";
import "../sass/sidebar/sidebar.scss";
import { menuData } from "../helpers/menuData";

export const Root = () => {
  return (
    <>
      {/* <div id="sidebar"> */}
      <div className="sidebar-container">
        <p>
          <span>Dev</span>challenges.io
        </p>

        <nav>
          <ul>
            {menuData.map((el, i) => (
              <li key={i}>
                <Link to={el.path}>{el.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* </div> */}

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

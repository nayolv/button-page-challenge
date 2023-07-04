import { NavLink, Outlet } from "react-router-dom";
import "../sass/sidebar/sidebar.scss";
import { menuData } from "../helpers/menuData";

export const Root = () => {
  return (
    <>
      <div className="sidebar-container">
        <p>
          <span>Dev</span>challenges.io
        </p>

        <nav>
          <ul>
            {menuData.map((el, i) => (
              <li key={i}>
                <NavLink to={el.path}>{el.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

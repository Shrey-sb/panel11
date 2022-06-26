import "./sidebar.scss";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">aptcoder</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <ListOutlinedIcon className="icon" />
            <Link to="/home" style={{ textDecoration: "none" }}>
              <span>Dashboard</span>
            </Link>
          </li>
          <Link to="/users" style={{ textDecoration: "none" }}></Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <ListOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <li>
            <ListOutlinedIcon className="icon" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

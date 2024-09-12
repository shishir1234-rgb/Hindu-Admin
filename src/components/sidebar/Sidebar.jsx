import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import axios from 'axios';
const apiUrl = process.env.REACT_BASE_URL;



const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Call the logout API
      await axios.post(`${apiUrl}/logout`, {}, { withCredentials: true });
      // Clear local storage or any tokens
      localStorage.removeItem('token');
      localStorage.removeItem('userDetails');
      alert('You are logout of the account.Thank you visit again.')
      // Navigate to home page
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <img style={{width:"70px"}} src="assets/hinduicon.png" alt="" /> <span style={{fontSize:"14px"}}>Hindu Business Directory</span>
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">TOTAL LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Company</span>
            </li>
          </Link>

          <p className="title">STATES</p>
          <Link to="/states" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>States</span>
            </li>
          </Link>

          <p className="title">CATEGORIES</p>
          <Link to="/categories" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Categories</span>
            </li>
          </Link>

          {/* <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link> */}
          {/* <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li> */}
          {/* <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li> */}
          {/* <p className="title">RATINGS</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li> */}
          
          <p className="title">NEW LISTING</p>
          <li>
          <InsertChartIcon className="icon" />
          <span> <Link to={'/new-listing-details'}>New Listing</Link> </span>
          </li>
          {/* <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li> */}


          <p className="title">TOP COMPANIES</p>
          <li>
          <InsertChartIcon className="icon" />
          <span> <Link to={'/top-company-details'}>Top Companies</Link> </span>
          </li>


          <p className="title">TOP REVIEWS</p>
          {/* <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li> */}
          <li>
            <PsychologyOutlinedIcon className="icon" />
            {/* <span>Reviews</span> */}
            <span> <Link to={'/top-review-details'}>Reviews</Link> </span>

          </li>
          {/* <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span><Link to={'/profile'}>Profile</Link></span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={handleLogout}>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;

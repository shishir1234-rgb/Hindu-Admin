import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./StatesWidget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import CategoryDetail from "./CategoryDetail/CategoryDetail";

const CategoryWidget = ({ data }) => {
  return (
    <div className="widget" style={{display:"flex"}}>
      <div className="left">
        <span className="title">{data.categoryName}</span>
        <span className="counter">{data.number}</span>
        <Link to={`/states/${data.categoryName}`} className="link">
          {data.linkText}
        </Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {data.percentage}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default CategoryWidget;

import React from "react";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import "./CategoriesData.scss"; // Import the new CSS file
import CategoryWidget from "./WidgetData/CategoryWidget";

const CategoriesData = () => {
  const widgetDataArray = [
    { categoryName: "Shops", number: "5000", linkText: "Read more", icon: <StorefrontOutlinedIcon className="icon" />, percentage: 20 },
    { categoryName: "Retailers", number: "3000", linkText: "Read more", icon: <StorefrontOutlinedIcon className="icon" />, percentage: 15 },
    { categoryName: "Home Businesses", number: "4000", linkText: "Read more", icon: <HomeWorkOutlinedIcon className="icon" />, percentage: 25 },
    { categoryName: "Franchises", number: "2500", linkText: "Read more", icon: <BusinessOutlinedIcon className="icon" />, percentage: 10 },
    { categoryName: "Traders", number: "2000", linkText: "Read more", icon: <AccountBalanceOutlinedIcon className="icon" />, percentage: 12 },
    { categoryName: "Manufacturers", number: "1500", linkText: "Read more", icon: <FactoryOutlinedIcon className="icon" />, percentage: 8 },
    { categoryName: "Industrialists", number: "1200", linkText: "Read more", icon: <FactoryOutlinedIcon className="icon" />, percentage: 5 },
    { categoryName: "Exporters", number: "1000", linkText: "Read more", icon: <PublicOutlinedIcon className="icon" />, percentage: 3 },
    { categoryName: "Importers", number: "800", linkText: "Read more", icon: <LocalShippingOutlinedIcon className="icon" />, percentage: 2 },
    { categoryName: "Professionals", number: "600", linkText: "Read more", icon: <WorkOutlineOutlinedIcon className="icon" />, percentage: 1 },
    { categoryName: "Teachers", number: "500", linkText: "Read more", icon: <SchoolOutlinedIcon className="icon" />, percentage: 0.8 },
    { categoryName: "Doctors", number: "400", linkText: "Read more", icon: <LocalHospitalOutlinedIcon className="icon" />, percentage: 0.7 },
    { categoryName: "Nurses", number: "300", linkText: "Read more", icon: <LocalHospitalOutlinedIcon className="icon" />, percentage: 0.5 },
    { categoryName: "Technocrats", number: "200", linkText: "Read more", icon: <PsychologyOutlinedIcon className="icon" />, percentage: 0.3 },
    { categoryName: "Economists", number: "100", linkText: "Read more", icon: <TrendingUpOutlinedIcon className="icon" />, percentage: 0.1 },
    { categoryName: "Thinkers", number: "50", linkText: "Read more", icon: <EmojiObjectsOutlinedIcon className="icon" />, percentage: 0.05 },
  ];

  return (
    <div className="widgetsContainer">
      {widgetDataArray.map((data, index) => (
        <CategoryWidget key={index} data={data} />
      ))}
    </div>
  );
};

export default CategoriesData;

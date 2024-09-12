import React from "react";
import Profile from "../../components/CompanyProfile/Profile";
import './ProfilePage.scss'
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const directoryData = {
  compName: "Hindu Business Directory",
  category: "Business Directory",
  averageRating: 4.7,
  reviewCount: 320,
  firstName: "Jane",
  lastName: "Smith",
  email: "contact@hindubusinessdirectory.com",
  contactNo: "+91 987 654 3210",
  address: "456 Business Avenue",
  state: "Maharashtra",
  pincode: "400001",
  country: "India",
  websiteURL: "https://www.hindubusinessdirectory.com",
  createdAt: "2020-05-15T00:00:00Z",
  images: [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ],
  videoURL: "https://www.youtube.com/watch?v=directoryExample",
  description:
    "Hindu Business Directory connects businesses across the Hindu community, providing a platform to expand networks and grow globally.",
  socialMedia: {
    facebook: "https://www.facebook.com/hindubusinessdirectory",
    instagram: "https://www.instagram.com/hindubusinessdirectory",
    linkedin: "https://www.linkedin.com/company/hindubusinessdirectory",
    skype: "https://join.skype.com/invite/directoryExample",
  },
};

const ProfilePage = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div>
          <Profile company={directoryData} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

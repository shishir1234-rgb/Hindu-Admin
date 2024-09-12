import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const apiUrl = process.env.REACT_BASE_URL;

function AvatarDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
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
    <div className="item" style={{ position: 'relative' }}>
      <img
        src="assets/hinduicon.png"
        alt="Avatar"
        className="avatar"
        onClick={toggleDropdown}
        style={{ cursor: 'pointer' , width:"50px", height:"50px" }}
      />
      {isDropdownOpen && (
        <div className="dropdown-menu" style={dropdownStyle}>
          <ul style={listStyle}>
            <li style={itemStyle}>  <Link  to={'/profile'}>Profile</Link>  </li>
            <li style={itemStyle} onClick={handleLogout}>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
}
const dropdownStyle = {
  position: 'absolute',
  top: '100%',
  right: 0,
  backgroundColor: '#fff',
  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  zIndex: 1,
  padding: '10px',
  borderRadius: '5px',
};
const listStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
};
const itemStyle = {
  padding: '8px 16px',
  cursor: 'pointer',
};
export default AvatarDropdown;
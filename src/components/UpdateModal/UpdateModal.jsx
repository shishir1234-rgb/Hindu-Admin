import React, { useState, useEffect } from "react";
import axios from 'axios';
import Modal from "react-modal";
import { FaTimes, FaUser, FaBuilding, FaEnvelope, FaMapMarkerAlt, FaTag, FaLock, FaKey, FaCheckCircle } from 'react-icons/fa';
import "./UpdateModal.scss";
const apiUrl = process.env.REACT_BASE_URL;


Modal.setAppElement("#root");

const categories = [
  "Shops", "Retailers", "Home Businesses", "Franchises", "Traders",
  "Manufacturers", "Industrialist", "Exporters", "Importers",
  "Professionals", "Teachers", "Doctors", "Nurses", "Technocrats",
  "Economist", "Thinkers"
];

const states = ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"];

const UpdateModal = ({ isOpen, onRequestClose, user, onUpdate }) => {
  const [formData, setFormData] = useState(user || {});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${apiUrl}/hindu/admin/update/company/${formData.id}`,
        { ...formData, oldPassword, newPassword }
      );
      if (response.data.success) {
        alert(response.data.message);
        onUpdate(formData);
        onRequestClose();
      } else {
        setError(response.data.message || "An error occurred");
      }
    } catch (error) {
      console.error(error);
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Update User"
      className="updateModal"
      overlayClassName="updateModalOverlay"
    >
      <div className="modalContent">
        <button className="closeButton" onClick={onRequestClose}>
          <FaTimes />
        </button>
        <div className="modalHeader">
          <h2><FaUser /> Update User</h2>
        </div>
        {error && <p className="error"><FaTimes /> {error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="formGrid">
            <label htmlFor="firstName">
              <FaUser />
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName || ''}
                onChange={handleChange}
                placeholder="First Name"
                aria-label="First Name"
              />
            </label>
            <label htmlFor="lastName">
              <FaUser />
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName || ''}
                onChange={handleChange}
                placeholder="Last Name"
                aria-label="Last Name"
              />
            </label>
            <label htmlFor="businessName">
              <FaBuilding />
              <input
                type="text"
                id="businessName"
                name="compName"
                value={formData.compName || ''}
                onChange={handleChange}
                placeholder="Business Name"
                aria-label="Business Name"
              />
            </label>
            <label htmlFor="email">
              <FaEnvelope />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email || ''}
                onChange={handleChange}
                placeholder="Email"
                aria-label="Email"
              />
            </label>
            <label htmlFor="address">
              <FaMapMarkerAlt />
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address || ''}
                onChange={handleChange}
                placeholder="Address"
                aria-label="Address"
              />
            </label>
            <label htmlFor="state">
              <FaMapMarkerAlt />
              <select
                id="state"
                name="state"
                value={formData.state || ''}
                onChange={handleChange}
                aria-label="State"
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </label>
            <label htmlFor="category">
              <FaTag />
              <select
                id="category"
                name="category"
                value={formData.category || ''}
                onChange={handleChange}
                aria-label="Category"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </label>
            <label htmlFor="status">
              <FaCheckCircle />
              <select
                id="status"
                name="status"
                value={formData.status || 'active'}
                onChange={handleChange}
                aria-label="Status"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </label>
            <label htmlFor="oldPassword">
              <FaLock />
              <input
                type="password"
                id="oldPassword"
                name="oldPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Password"
                aria-label="Old Password"
              />
            </label>
            <label htmlFor="newPassword">
              <FaKey />
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
                aria-label="New Password"
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="submitButton"
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default UpdateModal;
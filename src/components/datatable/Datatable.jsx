import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import UpdateModal from '../UpdateModal/UpdateModal';
import { userColumns } from '../../datatablesource'; // Assuming userColumns is a function
import './datatable.scss';
import axios from 'axios';
const apiUrl = process.env.REACT_BASE_URL;

// Convert data to CSV format
const convertToCSV = (data) => {
  const header = Object.keys(data[0]).join(',');
  const rows = data.map(item => Object.values(item).join(','));
  return [header, ...rows].join('\n');
};
// Trigger file download
const downloadCSV = (data) => {
  const csvData = convertToCSV(data);
  const blob = new Blob([csvData], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'user_data.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
const Datatable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [emailDetails, setEmailDetails] = useState({ to: '', subject: '' });
  const [refreshList, setRefreshList] = useState(false);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    axios.delete(`${apiUrl}/hindu/admin/delete/company/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token in the Authorization header
      },
    })
      .then(res => {
        alert(res?.data?.message);
        setRefreshList(!refreshList);
      })
      .catch(err => console.log(err.message));
  };
  const handleStatusChange = (id, currentStatus) => {
    const newStatus = currentStatus === 'Active' ? 'Inactive' : 'Active';
    const token = localStorage.getItem("token");
    axios.patch(`${apiUrl}/hindu/admin/changeStatus/${id}`, null, {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token in the Authorization header
      },
    })
    .then(res => {
      alert(res.data.message);
      setData(data.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      ));
      setRefreshList(!refreshList); // Refresh list to fetch updated data
    })
    .catch(err => console.log('Error changing status:', err.message));
  };
  const handleUpdate = (updatedUser) => {
    setRefreshList(!refreshList);
  };
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredData = data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(term)
      )
    );
    setFilteredData(filteredData);
  };
  const openModal = (user) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };
  const openEmailModal = () => {
    setIsEmailModalOpen(true);
    const selectedEmails = selectedUsers.map(user => user.email).join(', ');
    setEmailDetails({ ...emailDetails, to: selectedEmails });
  };
  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setEmailDetails({ ...emailDetails, [name]: value });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    // Implement the email sending functionality here
    console.log('Email sent to:', emailDetails.to);
    console.log('Subject:', emailDetails.subject);
    setIsEmailModalOpen(false);
  };
  const handleView = (row) => {
    console.log("Shishir", row);
    navigate("/user-detail", { state: row });
  };
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 300,
      renderCell: (params) => (
        <div className="cellAction">
          <button onClick={() => handleView(params.row)} className="viewButton">View</button>
          <div className="deleteButton" onClick={() => handleDelete(params.row._id)}>
            Delete
          </div>
          <div className="updateButton" onClick={() => openModal(params.row)}>
            Update
          </div>
          {/* <button
          onClick={() => handleStatusChange(params.row.id, params.row.status)}
          className={`statusButton ${params.row.status === 'Active' ? 'active' : 'inactive'}`}
        >
          {params.row.status === 'Active' ? 'Set Inactive' : 'Set Active'}
        </button> */}
        </div>
      ),
    },
  ];
  useEffect(() => {
    axios.get("${apiUrl}/hindu/admin/allComp")
      .then(res => {
        console.log('API Response:', res.data);
        // Add a unique `id` to each item if it doesn't already exist
        const tableData = res.data.map((item) => ({ ...item, id: item._id }));
        setData(tableData);
        setFilteredData(tableData);
      })
      .catch(err => console.log(err));
  }, [refreshList]);
  return (
    <div className="datatable">
      <div className="datatableTitle">
        All Company Listing
        <button
          onClick={() => downloadCSV(filteredData)}
          className="downloadButton"
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          <DownloadOutlinedIcon
            style={{
              marginRight: '8px',
              fontSize: '20px'
            }}
          />
          Download CSV
        </button>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <SearchOutlinedIcon />
        </div>
      </div>
      <DataGrid
        className="datagrid"
        rows={filteredData}
        columns={userColumns(handleStatusChange).concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        onSelectionModelChange={(newSelection) => {
          setSelectedUsers(newSelection.map(id => data.find(item => item.id === id)));
        }}
      />
      {currentUser && (
        <UpdateModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          user={currentUser}
          onUpdate={handleUpdate}
        />
      )}
      {isEmailModalOpen && (
        <div className="emailModal" style={{ width: '40%', height: '40%' }}>
          <div
            className="emailModalContent"
            style={{
              padding: '2%',
              position: 'relative',
              backgroundColor: 'white',
            }}
          >
            <button
              type="button"
              onClick={() => setIsEmailModalOpen(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#333'
              }}
            >
              &times;
            </button>
            <h2>Compose Email</h2>
            <form onSubmit={sendEmail}>
              <div className="formGroup">
                <label>To:</label>
                <input
                  type="text"
                  name="to"
                  value={emailDetails.to}
                  onChange={handleEmailChange}
                  readOnly
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                />
              </div>
              <div className="formGroup">
                <textarea
                  id="subject"
                  name="subject"
                  value={emailDetails.subject}
                  onChange={handleEmailChange}
                  rows="4"
                  cols="50"
                  placeholder="Enter the subject here..."
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  marginTop: '10px',
                  padding: '10px 20px',
                  backgroundColor: '#007BFF',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default Datatable;
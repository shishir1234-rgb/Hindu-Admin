import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ActiveInActiveTable.scss';

const ActiveInActiveTable = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Number of items per page

  const data = [
    { companyName: 'TechCorp', state: 'California', category: 'Technology', email: 'contact@techcorp.com' },
    { companyName: 'HealthPlus', state: 'New York', category: 'Healthcare', email: 'info@healthplus.com' },
    // Add more data as needed
  ];

  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / pageSize);

  // Function to handle page changes
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="admin-table-container">
      <div className="background-div">
      <h1 style={{color:'gray', textAlign:'center'}}>{props.title}</h1>        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>State</th>
                <th>Category</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr key={index}>
                  <td>{item.companyName}</td>
                  <td>{item.state}</td>
                  <td>{item.category}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-btn"
            >
              <FaChevronLeft />
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="pagination-btn"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveInActiveTable;

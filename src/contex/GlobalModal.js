import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const ITEMS_PER_PAGE = 10;

const GlobalModal = ({ show, title, data, onClose, inputId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  // Reset page & search when modal opens/closes or data changes
  useEffect(() => {
    setCurrentPage(1);
    setSearchText('');
  }, [show, data]);
  

  if (!show) return null;

  if (!data || data.length === 0) {
    return (
      <div className="modal-overlay-gettable">
        <div className="modal-gettable">
          <h2>{title}</h2>
          <p>No data available</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }

  // Filter data based on searchText (case-insensitive, any field)
  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const headers = Object.keys(data[0]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleRowClick = (row) => {
    headers.forEach((header) => {
      const inputId = `${title}_${header}`;

      // The key to get from row is header itself
      const value = row[header];

      const inputElement = document.getElementById(inputId);
      if (inputElement) {
        inputElement.value = value;
      } else {
        console.warn(`Element with ID '${inputId}' not found.`);
      }
    });
    onClose();
  };

  return (
    <div className="modal-overlay-gettable">
      <div className="modal-gettable">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>

        {/* Search bar */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              // flex: 1,
              padding: '6px 10px',
              borderRadius: 4,
              border: '1px solid #ccc',
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setCurrentPage(1);
            }}
          />
          <button
            onClick={() => setCurrentPage(1)}
            style={{
              padding: '6px 12px',
              borderRadius: 4,
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label="Search"
          >
            <FaSearch />
          </button>
        </div>

        {/* Data Table */}
        <table className="modal-table-gettable" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  style={{ borderBottom: '2px solid #ddd', padding: '8px', textAlign: 'left' }}
                >
                  {header.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, i) => (
              <tr
                key={i}
                onClick={() => handleRowClick(row)}
                style={{ cursor: 'pointer', borderBottom: '1px solid #eee' }}
              >
                {headers.map((header) => (
                  <td key={header} style={{ padding: '8px' }}>
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>


        <div className='pegin-gettable' style={{ marginTop: 12, display: 'flex', justifyContent: 'center', gap: 12 }}>
          <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
            <img src="/icons8-end12.png" alt="Next" /> 
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
             <img src="/icons8-end2.png" alt="Next" /> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlobalModal;

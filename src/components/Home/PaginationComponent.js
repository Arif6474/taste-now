/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

function PaginationComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/items?page=${currentPage}`);
          const data = await response.json();
          setItems(data.items);
          setTotalPages(data.totalPages);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    fetchData();
  }, [currentPage]);

 

  return (
    <div>
      {/* Render items */}
      <div>
        {items.map((item) => (
          <h1 key={item._id}>{item.name}</h1>
        ))}
      </div>

      {/* Pagination buttons */}
      <div>
        {/* Previous Page Button */}
        <button
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Page Number Buttons */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Page Button */}
        <button
          onClick={() => {
            if (currentPage < totalPages) {
              setCurrentPage(currentPage + 1);
            }
          }}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginationComponent;

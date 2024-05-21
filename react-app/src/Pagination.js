import React from 'react';
import './Pagination.css';

const Pagination = () => {
  return (
    <div className="pagination-container">
      <div className="pagination">
        <span className="arrow">&larr;</span> Older
        <span className="pages">
          {Array.from({ length: 9 }).map((_, index) => (
            <span className="page" key={index}>{index + 1}</span>
          ))}
        </span>
        Newer <span className="arrow">&rarr;</span>
      </div>
    </div>
  );
};

export default Pagination;



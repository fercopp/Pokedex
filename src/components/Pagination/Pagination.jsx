import React from 'react';
import './Pagination.css';
import { usePagination } from '../../hooks/usePagination';

const DOTS = '...'; 

const Pagination = ({ onPageChange, totalCount, siblingCount, currentPage, pageSize, className }) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // Hide component if less than 2 pages
  if (currentPage === 0 || (paginationRange ?? []).length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={`pagination-container ${className ? className : ''}`}>
      {/* Left navigation arrow */}
      <li
        className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber, index) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li key={index} className="pagination-item dots">
              &#8230; 
            </li>
          );
        }

        return (
          <li
            key={index}
            className={`pagination-item ${pageNumber === currentPage ? 'selected' : ''}`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/* Right navigation arrow */}
      <li
        className={`pagination-item ${currentPage === lastPage ? 'disabled' : ''}`}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
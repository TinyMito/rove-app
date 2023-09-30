import React, { useState, useEffect, useCallback } from 'react';
import Pagination from '@mui/material/Pagination';

// Days Hook
export const Days = ({ daysCount, currentDay, handleChange }) => {
  return (
    <Pagination 
      count={daysCount} 
      page={currentDay} 
      onChange={handleChange} 
      siblingCount={0}
      boundaryCount={1}
      shape="rounded"
    />
  )
}
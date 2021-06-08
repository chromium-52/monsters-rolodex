import React from 'react';
import './search-box.styles.css';

// A functional component is just a component that gets some props and returns some HTML (no state or lifecycle methods)
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);


import React from 'react';
import PropTypes from 'prop-types';

const SearchFilter = ({setSearchInput }) => {


  return (
  <div>
    <div className={"search-wrapper"}>
        <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
            setSearchInput(e.target.value)}}
        />
    </div>
  </div>
  )
};

SearchFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default SearchFilter;

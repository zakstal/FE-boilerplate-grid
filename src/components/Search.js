import React, { Component } from 'react';

const Search = ({ value, onChange }) =>
  <input id="search" value={value} onChange={onChange}/>

export default Search;
import React from "react";
import './search-box.styles.css';

export const SearchBox = ( { placeHolder, action} ) => (
  <input className="search" type='search' placeholder={ placeHolder} onChange={ action }/>
)


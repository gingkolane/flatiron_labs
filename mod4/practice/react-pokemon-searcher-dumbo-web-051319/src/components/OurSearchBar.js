import React from 'react';


{/* <OurSearchBar searchTerm={this.state.searchTerm} handleChange={this.handleChange}/> */}
// from index these two props were passed down
const OurSearchBar = (searchTerm, handleChange) => 
  <input type='text' value={searchTerm} onChange={handleChange}/>
  
export default OurSearchBar;
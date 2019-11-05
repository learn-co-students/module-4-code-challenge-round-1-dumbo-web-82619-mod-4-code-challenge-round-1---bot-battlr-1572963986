import React, { Component } from 'react'


class Search extends Component {

 render() {
  return(
   <div>

       <form onChange={this.props.handleSearchChange}>
           <label htmlFor="search">Search</label>
           <input id="search" name='search' type="text"/>
       </form>
   </div>
    )
   }
 }



export default Search
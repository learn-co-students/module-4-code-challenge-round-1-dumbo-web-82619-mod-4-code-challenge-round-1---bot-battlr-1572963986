import React, { Component } from 'react'

class Sort extends Component {

 render() {
  return(
   <div>
       <h1>Sort</h1>
       <select name="sortValue" onChange={this.props.handleSortValue}>
            <option value="Healt">Health </option>
            <option value="Damage"> Damage</option>
       </select>
   </div>
    )
   }
 }

export default Sort
import React from 'react';


let SearchBar = (props) => {

  let searchHandler = (event) => {
    // "lifting the state up"
    props.searchChange(event.currentTarget.value)
  }

  let checkboxHandler = (event) => {
    // will be 'true' or 'false'
    props.onStockChange(event.currentTarget.checked)
  }

  let checkboxHandler2 = (event) => {
    // will be 'true' or 'false'
    props.onStockChange(event.currentTarget.checked)
  }


  //props.onStockChange

  return (
    <div>
      <input type="text" name="" id="" placeholder="Search here for your fav places ..." onChange={searchHandler} value={props.searchTerm} />
      <br></br>

      <input type="checkbox" name="" id="" onChange={checkboxHandler} /> <h1>filter1</h1>
      <br></br>
      <input type="checkbox" name="" id="" onChange={checkboxHandler2} /> <h1>filter2 for products less or euqals 100</h1>


    </div>
  )

}

export default SearchBar;
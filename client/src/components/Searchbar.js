import React from 'react';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Form, FormControl } from 'react-bootstrap';

import Row from 'react-bootstrap/Row'


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
  let checkboxHandler3 = (event) => {
    // will be 'true' or 'false'
    props.onStockChange(event.currentTarget.checked)
  }
  let checkboxHandler4 = (event) => {
    // will be 'true' or 'false'
    props.onStockChange(event.currentTarget.checked)
  }


  //props.onStockChange

  return (
    <div>
      <Form inline className="mysearchbarform">
        <div class="searchbar">
          <FormControl type="text" name="" id="" placeholder="Search here for your fav places ..." onChange={searchHandler} value={props.searchTerm} />
        </div>

        <Row>
          <Col xs>   <input type="checkbox" name="SOMETHING" id="" onChange={checkboxHandler} />
            <p>price less than 100</p></Col>
          <Col xs={{ order: 12 }}><input type="checkbox" name="SOMETHING" id="" onChange={checkboxHandler2} />
            <p>price less than 500</p></Col>
          <Col xs={{ order: 1 }}> <input type="checkbox" name="SOMETHING" id="" onChange={checkboxHandler3} />
            <p>price less than 1000</p></Col>
        </Row>








        <input type="checkbox" name="SOMETHING" id="" onChange={checkboxHandler4} />
        <p>price less than 1200</p>


      </Form>

    </div >
  )

}

export default SearchBar;
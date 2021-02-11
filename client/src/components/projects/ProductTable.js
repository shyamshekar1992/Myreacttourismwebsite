import React from 'react';
import Places from './Places';

function ProductTable(props) {

  return (
    <div>
      {props.productsArr.map(product => {
        return <Places theProduct={product}></Places>
      })}
    </div>
  );
}

export default ProductTable;

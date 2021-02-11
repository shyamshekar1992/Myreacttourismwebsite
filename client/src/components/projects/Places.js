import React from 'react';
import { Link } from 'react-router-dom';



// since we don't use state --> should be function component
class Places extends React.Component {

  render() {
    return (
      <div>

        <Link to={"Place/" + this.props.id} >{this.props.name}</Link>
        <h2>{this.props.description}</h2>
        <h3>likes:{this.props.likes}</h3>
        <img src={this.props.img}></img>



      </div>
    )
  }

}

export default Places;
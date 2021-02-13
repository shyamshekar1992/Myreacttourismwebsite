// components/projects/AddProject.js

import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Cars extends Component {



  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-80"
              src="https://www.clementoni.com/media/prod/de/35038/new-york-500-teile-high-quality-collection_IKq1b5u.jpg" alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-80"
              src="https://www.stluciasouthafrica.com/wp-content/uploads/2012/04/11779915_933612903369860_4538286519819190151_o-1024x515.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-80"
              src="https://www.stluciasouthafrica.com/wp-content/uploads/2012/04/11779915_933612903369860_4538286519819190151_o-1024x515.jpg" alt="Third slide"
            />


            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-80"
              src="https://www.stluciasouthafrica.com/wp-content/uploads/2012/04/11779915_933612903369860_4538286519819190151_o-1024x515.jpg" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default Cars;
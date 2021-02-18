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
              className="Carousel"
              src="https://globalgrasshopper.com/wp-content/uploads/2016/05/The-most-beautiful-places-to-visit-in-South-Africa.jpg" alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="Carousel"
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZHViYWl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80;"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="Carousel"
              src="https://i.insider.com/5acb80fafacba842008b457b?width=1100&format=jpeg&auto=webp" alt="Third slide"
            />


            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="Carousel"
              src="https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-amer-fort-jaipur.jpg" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="Carousel"
              src="https://i2.wp.com/theluxurytravelexpert.com/wp-content/uploads/2019/07/best-hotels-maldives.jpg?fit=1280%2C720&ssl=1" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="Carousel"
              src="https://www.fodors.com/wp-content/uploads/2019/12/08_ChennaiArchitecture__ChennaiCentralRailway_shutterstock_683393986.jpg" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="Carousel"
              src="https://wallpaperaccess.com/full/2719560.jpg" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="Carousel"
              src="https://cms.qz.com/wp-content/uploads/2018/11/RTX6HAIH.jpg?quality=75&strip=all&w=1600&h=900&crop=1" />

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
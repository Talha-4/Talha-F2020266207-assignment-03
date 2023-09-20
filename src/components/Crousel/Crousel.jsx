import React from 'react'
import { Carousel } from "react-bootstrap"
import { Container } from "react-bootstrap"

const Crousel = () => {
  return (
    <Carousel>
        <Carousel.Item>
          <img
            src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="First slide"
            width="1600"
            height="500"

          />

          <Carousel.Caption>
            <h3>Welcome to my World!</h3>
            <p>My Name is Talha. And I am a Developer!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.pexels.com/photos/4219639/pexels-photo-4219639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
            width="1600"
            height="500"
          />
          <Carousel.Caption>
            <h3>Code is My Game, Cricket is My Fame</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.pexels.com/photos/4610272/pexels-photo-4610272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
            width="1600"
            height="500"
          />
          <Carousel.Caption>
            <h3>Cricket Lover, Code Creator, World Explorer.</h3>
          </Carousel.Caption>
        </Carousel.Item>


      </Carousel>
  )
}

export default Crousel
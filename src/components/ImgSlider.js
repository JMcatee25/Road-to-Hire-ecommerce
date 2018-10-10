import React, { Component } from "react";
import Slider from "react-slick";

export default class ImgSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      prevArrow: null,
      nextArrow: null
    };
    return (
      // Add map functions
      <Slider {...settings}>
        <div>
          <img
            src={
              this.props.products[
                Math.floor(Math.random() * this.props.products.length)
              ].productImageurl
            }
            alt=""
            className="slider__img"
          />
        </div>
        <div>
          <img
            src={
              this.props.products[
                Math.floor(Math.random() * this.props.products.length)
              ].productImageurl
            }
            alt=""
            className="slider__img"
          />
        </div>
        <div>
          <img
            src={
              this.props.products[
                Math.floor(Math.random() * this.props.products.length)
              ].productImageurl
            }
            alt=""
            className="slider__img"
          />
        </div>
        <div>
          <img
            src={
              this.props.products[
                Math.floor(Math.random() * this.props.products.length)
              ].productImageurl
            }
            alt=""
            className="slider__img"
          />
        </div>
      </Slider>
    );
  }
}

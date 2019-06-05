import React, { Component } from "react";
import Slider from "react-slick";
import Img from "gatsby-image";
import { Link } from "gatsby";

var settings = {
  dots: true,
  speed: 500,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default class Banner extends React.Component {
  render() {

    const { BannerData } = this.props;

    return (
      <div className="slider-section">
        <Slider {...settings}>
          {BannerData.map((items, i) => (
            <div key={i} className="item">
              <div className="site-Banner">
                <Img sizes={items.node.image.fluid} />
                <div className="Banner-details">
                  <div>
                    <span className="sub-title">{items.node.subHeading}</span>
                    <h1>{items.node.title}</h1>
                    <Link to="/store">Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
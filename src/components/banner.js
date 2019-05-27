import React, { Component } from "react";
import Slider from "react-slick";
import Img from "gatsby-image"

var settings = {
  dots: true,
  speed: 500,
  infinite: true,
  autoplay:true,
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
            {BannerData.map(items => (
                <div className="item">
                    <div className="site-Banner">
                        <Img sizes={items.node.image.fixed} />
                        <div className="Banner-details">
                            <div>
                                <span className="sub-title">{items.node.subHeading}</span>
                                <h1>{items.node.title}</h1>
                                <a href="/store">Shop Now</a>
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
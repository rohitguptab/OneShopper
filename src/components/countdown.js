import React, { Component } from "react";
import Img from "gatsby-image"
import CountDown from 'reactjs-countdown';



export default class Countdown extends React.Component {

  render() {


    const { data } = this.props;

    return (
      <div className="countdown-section">
        <Img sizes={data.featureImage.fixed} />
        <div className="container">
          <div className="countdown-inner">
            <h2 className="with-underline">{data.title}</h2>
            <span className="date">Last Date :</span>
            <span className="date"><strong><i class="fas fa-clock"></i>{data.date}</strong></span>
            <a href="/store">Shop Now</a>
          </div>
        </div>
      </div>
    );
  }
}
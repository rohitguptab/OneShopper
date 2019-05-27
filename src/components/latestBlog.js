import React, { Component } from "react";
import Img from "gatsby-image"

export default class LatestBlogs extends React.Component {
  render() {

    const { data } = this.props;
    
    return (
        <div className="container">
            <div class="text-center"><h2 class="with-underline">Latest Blogs</h2></div>
            <ul className="latest-blog">
                {data.edges.map(items => (
                    <li key={items.node.id}>
                        <div className="inner">
                            <a href={items.node.slug}></a>
                            <Img sizes={items.node.featureImage.fixed} />
                            <h2>{items.node.title}</h2>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
  }
}
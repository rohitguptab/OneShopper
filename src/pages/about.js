import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
class About extends React.Component {
    render() {
        return ( <
            Layout >
            <SEO title="About" keywords={[`gatsby`, `application`, `react`]} /> <
            div className = "site-About" >
            <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h2>About Us</h2>
                    <p>This Started created for Ecommerce site with Gatsby + Contentful and snipcart</p>
                    <h2>Features</h2>
                    <ul>
                        <li>Blog post listing with for each blog post.</li>
                        <li>Store page with all Product with few good features like Rating, Price, Checkout, More then one Product images with tabbing.</li>
                        <li>Contact form with Email notification.</li>
                        <li>Index pages design with Latest Post, Latest Blog and Deal of week and Banner.</li>
                        <li>So many other Good features</li>
                    </ul>
                    <h2>Setup</h2>
                    <h3>Create a Gatsby site.</h3>
                    <p>Use the Gatsby CLI to Clone this site.</p>
                    <code>
                        # Clone this Repositories<br></br>
                        gatsby new OneShopper https://github.com/Rohitguptab/OneShopper.git
                    </code>
                    <h3>Start developing.</h3>
                    <p>Navigate into your new site’s directory and start it up.</p>
                    <code>
                        cd OneShopper<br></br>
                        npm install<br></br>
                        gatsby develop
                    </code>
                    <h3>Setup your Own Configure Projects.</h3>
                    <p>Enter your own key</p>
                    <strong>ContentFul:</strong>
                    <ul>
                        <li>spaceId = Key</li>
                        <li>accessToken = Key</li>
                    </ul>
                    <strong>snipcart:</strong>
                    <ul>
                        <li>snipcart = Key</li>
                    </ul>
                </div>
            </div>
        </div> <
            /div> <
            / Layout>
        )
    }
}
export default About
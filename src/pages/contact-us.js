import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends React.Component {
    render() {
        return (
            < Layout >
                <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <div className="site-Contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <span>Contact Us</span>
                            </div>
                        </div>
                    </div>
                </div>
            </ Layout>
        )
    }
}

export default Contact

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends React.Component {
    render() {
        return (
            < Layout >
                <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <div className="Contact-us">
                    <div className="container">
                        <form name="contact" netlify>
                            <p>
                                <label>Name <input type="text" name="name" /></label>
                            </p>
                            <p>
                                <label>Email <input type="email" name="email" /></label>
                            </p>
                            <p>
                                <button type="submit">Send</button>
                            </p>
                        </form>
                    </div>
                </div>
            </ Layout>
        )
    }
}

export default Contact

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends React.Component {
    render() {
        return (
            <Layout>
                <SEO title="Contact Us" keywords={[`gatsby`, `Contact Us`, `react`]} />
                <div className="Contact-us">
                    <div className="container">
                        {/* To make form work, use your own formspree credentials in action="" */}
                        <form action="https://formspree.io/rohitguptab33@gmail.com" method="POST" name="contact">
                            <div>
                                <label>Your name
                                <input type="text" name="name" required /></label>
                            </div>
                            <div>
                                <label>Your Email: 
                                <input type="email" name="email" required /></label>
                            </div>
                            <div>
                                <label>Message: 
                                <textarea name="message" required></textarea></label>
                            </div>
                            <div>
                                <button type="submit" required>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Contact

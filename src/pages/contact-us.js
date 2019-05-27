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
                    <form name="contact" method="POST" data-netlify="true" netlify>
                        <p>
                            <label>Your Name: <input type="text" name="name" /></label>   
                        </p>
                        <p>
                            <label>Your Email: <input type="email" name="email" /></label>
                        </p>
                        <p>
                            <label>Your Role: <select name="role[]" multiple>
                            <option value="leader">Leader</option>
                            <option value="follower">Follower</option>
                            </select></label>
                        </p>
                        <p>
                            <label>Message: <textarea name="message"></textarea></label>
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

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends React.Component {
    render() {
        return (
            < Layout >
                <SEO title="Contact Us" keywords={[`gatsby`, `application`, `react`]} />
                <div className="Contact-us">
                    <div className="container">
                        {/* To make form work, use your own formspree credentials in action="" */}
                        <form action="https://formspree.io/ch.richard22@gmail.com" method="POST" name="contact">
                            <div>
                                <label>Nombre: </label>
                                <input type="text" name="name" />
                            </div>
                            <div>
                                <label>Email: </label>
                                <input type="email" name="email" />
                            </div>
                            <div>
                                <label>Mensaje: </label>
                                <textarea name="message"></textarea>
                            </div>
                            <div>
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </ Layout>
        )
    }
}

export default Contact

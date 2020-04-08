import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
class About extends React.Component {
    render() {
        return ( <Layout>
            <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
                <div className="site-About">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Gatsby Starter: Ecommerce and Flotiq</h1>
                            <p>Ecommerce starter: <a href="https://www.gatsbyjs.org/">Gatsby</a> + <a href="https://flotiq.com">Flotiq</a> + <a href="https://snipcart.com">Snipcart</a>.</p>
                            <p>Live Demo: <a href="https://flotiq-starter-products.herokuapp.com">https://flotiq-starter-products.herokuapp.com</a></p>
                            <p>Quick start: <a href="https://github.com/flotiq/gatsby-starter-products/blob/master/README.md">https://github.com/flotiq/gatsby-starter-products</a></p>


                            <ul>
                                <li>
                                    <p><strong>For most developers, we recommend starting with our <a href="https://www.gatsbyjs.org/tutorial/">in-depth tutorial for creating a site with Gatsby</a>.</strong> It starts with zero assumptions about your level of ability and walks through every step of the process.</p>
                                </li>
                                <li>
                                    <p><strong>To dive straight into code samples, head <a href="https://www.gatsbyjs.org/docs/">to our documentation</a>.</strong> In particular, check out the <em>Guides</em>, <em>API Reference</em>, and <em>Advanced Tutorials</em> sections in the sidebar.</p>
                                </li>
                            </ul>

                            <h2 id="learningflotiq">Learning Flotiq</h2>

                            <p>Using Flotiq you model, author and consume your content, your way. Flotiq is an API-first CMS that takes care of hosting, securing and scaling to guarantee your content is always on.</p>
                            <p>See what you can do with Flotiq Headless CMS System:</p>
                            <ul>
                                <li>
                                    <p><a href="https://flotiq.com">Flotiq.com homepage</a></p>
                                </li>
                                <li>
                                    <p><a href="https://flotiq.com/docs">Flotiq docs</a></p>
                                </li>
                                <li>
                                    <p><a href="https://github.com/flotiq">Explore example repositories</a></p>
                                </li>
                            </ul>

                            <h2 id="deploy">Deploy</h2>
                            <p>You can deploy this project to Heroku in 3 minutes:</p>
                            <p><a href="https://heroku.com/deploy?template=https://github.com/flotiq/gatsby-starter-products"><img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy" /></a></p>
                        </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
export default About
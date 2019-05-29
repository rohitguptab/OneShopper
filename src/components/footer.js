import React from "react"

class Footer extends React.Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="footer_inner">
                    <div className="container">
                        <div className="footer-widget footer-content">
                            <section id="nav_menu-8" className="widget widget_nav_menu">
                                <div className="menu-main-container">
                                    <ul id="menu-main" className="menu">
                                        <li><a href="/about">About</a></li>
                                        <li><a href="/blogs">Blogs</a></li>
                                        <li><a href="/store">Store</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                        <li><a href="/copyright">Copyright</a></li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                        <div className="footer-bottom social-right-menu ">
                            <div className="site-info">
                                Proudly powered by Rohit Gupta.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer

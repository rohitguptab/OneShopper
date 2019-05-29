import React from "react"

class Footer extends React.Component {
    render() {
        return (
            <footer className="site-footer">
                <div class="footer_inner">
                    <div class="container">
                        <div class="footer-widget footer-content">
                            <section id="nav_menu-8" class="widget widget_nav_menu">
                                <div class="menu-main-container">
                                    <ul id="menu-main" class="menu">
                                        <li><a href="/about">About</a></li>
                                        <li><a href="/blogs">Blogs</a></li>
                                        <li><a href="/store">Store</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                        <li><a href="/copyright">Copyright</a></li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                        <div class="footer-bottom social-right-menu ">
                            <div class="site-info">
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

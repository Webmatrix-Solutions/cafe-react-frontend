import React from 'react'
import '../App.css';

function Hero() {
    return (
        <>
            <>
                {/* Home Hero Section Start */}
                <div className="hero parallaxie">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {/* Section Title start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp" data-wow-delay="0.50s">
                                        Welcome to Fwizz
                                    </h3>
                                    <h1 className="text-anime">Taste Flavours from Around the World</h1>
                                </div>
                                {/* Section Title end */}
                                {/* Hero Content start */}
                                <div className="hero-content wow fadeInUp" data-wow-delay="0.75s">
                                    <p>
                                        Duis nec semper ligula. Nullam nec justo vel metus gravida
                                        consequat. Suspendisse potenti. Quisque fermentum, nisl vitae
                                        auctor commodo, justo metus tincidunt elit.
                                    </p>
                                </div>
                                {/* Hero Content end */}
                                {/* Hero Footer start */}
                                <div className="hero-footer">
                                    <a
                                        href="#"
                                        className="btn-default btn-book-now wow fadeInUp"
                                        data-wow-delay="1s"
                                    >
                                        Book Now
                                    </a>
                                    <a
                                        href="#"
                                        className="btn-default btn-order-online wow fadeInUp"
                                        data-wow-delay="1.25s"
                                    >
                                        Order Online
                                    </a>
                                </div>
                                {/* Hero Footer end */}
                            </div>
                        </div>
                    </div>
                    <div className="down-arrow">
                        <a href="#home-about">
                            <img src="images/icon-down-arrow.svg" alt="" />
                        </a>
                    </div>
                </div>
                {/* Home Hero Section End */}
            </>
        </>
    )
}

export default Hero
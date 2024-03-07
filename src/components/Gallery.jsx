import React from 'react'

function Gallery() {
    return (
        <>
                {/* About Gallery Start */}
                <div className="about-gallery">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {/* Section Ttile start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp" data-wow-delay="0.50s">
                                        Over Restaurant
                                    </h3>
                                    <h2 className="text-anime">Restaurant Gallery</h2>
                                </div>
                                {/* Section Ttile end */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 wow fadeInUp" data-wow-delay="0.75s">
                                {/* About Photo Gallery Start */}
                                <div className="about-photo-gallery-entry restaurants-gallery">
                                    <div className="photo-gallery-item">
                                        <a href="images/gallery-1.jpg">
                                            <figure className="image-anime">
                                                <img src="images/gallery-1.jpg" alt="" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="photo-gallery-item">
                                        <a href="images/gallery-2.jpg">
                                            <figure className="image-anime">
                                                <img src="images/gallery-2.jpg" alt="" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="photo-gallery-item">
                                        <a href="images/gallery-3.jpg">
                                            <figure className="image-anime">
                                                <img src="images/gallery-3.jpg" alt="" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="photo-gallery-item">
                                        <a href="images/gallery-4.jpg">
                                            <figure className="image-anime">
                                                <img src="images/gallery-4.jpg" alt="" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="photo-gallery-item">
                                        <a href="images/gallery-5.jpg">
                                            <figure className="image-anime">
                                                <img src="images/gallery-5.jpg" alt="" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="photo-gallery-item">
                                        <a href="images/gallery-6.jpg">
                                            <figure className="image-anime">
                                                <img src="images/gallery-6.jpg" alt="" />
                                            </figure>
                                        </a>
                                    </div>
                                </div>
                                {/* About Photo Gallery end */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* About Gallery End */}
            </>
            )
}

            export default Gallery
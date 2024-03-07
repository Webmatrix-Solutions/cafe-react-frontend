import React from 'react'

function Events() {
    return (
        <>
            {/* Upcoming Events Post Start */}
            <div className="events-post">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {/* Section Title start */}
                            <div className="section-title">
                                <h3 className="wow fadeInUp" data-wow-delay="0.50s">
                                    Features Events
                                </h3>
                                <h2 className="text-anime">Upcoming Events</h2>
                            </div>
                            {/* Section Title end */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            {/* Post Item Start */}
                            <div className="post-item wow fadeInUp" data-wow-delay="0.75s">
                                {/* Post Featured Image start */}
                                <div className="post-featured-image">
                                    <a href="blog-single.html">
                                        <figure className="image-anime">
                                            <img src="images/post-1.jpg" alt="" />
                                        </figure>
                                    </a>
                                </div>
                                {/* Post Featured Image end */}
                                {/* Post Header Start */}
                                <div className="post-header">
                                    <div className="post-meta">
                                        <ul>
                                            <li className="post-meta-date">
                                                <a href="blog-single.html">March 17, 2024</a>
                                            </li>
                                            <li>
                                                <a href="#">Restaurants</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3>
                                        <a href="blog-single.html">
                                            Wine and Dine: Perfect Pairings for an Unforgettable Meal
                                        </a>
                                    </h3>
                                </div>
                                {/* Post Header End */}
                            </div>
                            {/* Post Item End */}
                        </div>
                        <div className="col-lg-4 col-md-12">
                            {/* Post Item Start */}
                            <div className="post-item wow fadeInUp" data-wow-delay="1.0s">
                                {/* Post Featured Image start */}
                                <div className="post-featured-image">
                                    <a href="blog-single.html">
                                        <figure className="image-anime">
                                            <img src="images/post-2.jpg" alt="" />
                                        </figure>
                                    </a>
                                </div>
                                {/* Post Featured Image end */}
                                {/* Post Header Start */}
                                <div className="post-header">
                                    <div className="post-meta">
                                        <ul>
                                            <li className="post-meta-date">
                                                <a href="blog-single.html">March 17, 2024</a>
                                            </li>
                                            <li>
                                                <a href="#">Restaurants</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3>
                                        <a href="blog-single.html">
                                            A Spotlight on Our Culinary Innovations
                                        </a>
                                    </h3>
                                </div>
                                {/* Post Header End */}
                            </div>
                            {/* Post Item End */}
                        </div>
                        <div className="col-lg-4 col-md-12">
                            {/* Post Item Start */}
                            <div className="post-item wow fadeInUp" data-wow-delay="1.25s">
                                {/* Post Featured Image start */}
                                <div className="post-featured-image">
                                    <a href="blog-single.html">
                                        <figure className="image-anime">
                                            <img src="images/post-3.jpg" alt="" />
                                        </figure>
                                    </a>
                                </div>
                                {/* Post Featured Image end */}
                                {/* Post Header Start */}
                                <div className="post-header">
                                    <div className="post-meta">
                                        <ul>
                                            <li className="post-meta-date">
                                                <a href="blog-single.html">March 17, 2024</a>
                                            </li>
                                            <li>
                                                <a href="#">Restaurants</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3>
                                        <a href="blog-single.html">
                                            Tantalizing Tidbits: Fun Facts About Our Menu Creations
                                        </a>
                                    </h3>
                                </div>
                                {/* Post Header End */}
                            </div>
                            {/* Post Item End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Upcoming Events Post End */}
        </>

    )
}

export default Events
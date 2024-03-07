import React from 'react'

function Testimonials() {
    return (
        <>
            {/* Testimonials Section Start */}
            <div className="testimonials-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-7">
                            {/* Section Ttite start */}
                            <div className="section-title">
                                <h3 className="wow fadeInUp" data-wow-delay="0.50s">
                                    Testimonial
                                </h3>
                                <h2 className="text-anime">What People's Say About Resaturant</h2>
                            </div>
                            {/* Section Ttite end */}
                            <div
                                className="testimonial-slider-wrapper wow fadeInUp"
                                data-wow-delay="0.75s"
                            >
                                {/* Testimonial Carousel start */}
                                <div className="swiper testimonial-slider">
                                    <div className="swiper-wrapper">
                                        {/* Testimonial Slide start */}
                                        <div className="swiper-slide">
                                            <div className="testimonial-slide">
                                                <div className="testimonial-body">
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the
                                                        industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley of type and
                                                        scrambled mak a type specimen book.
                                                    </p>
                                                </div>
                                                <div className="testimonial-footer">
                                                    <h3>Diana</h3>
                                                    <p>Happy Customer</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Testimonial Slide end */}
                                        {/* Testimonial Slide start */}
                                        <div className="swiper-slide">
                                            <div className="testimonial-slide">
                                                <div className="testimonial-body">
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the
                                                        industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley of type and
                                                        scrambled mak a type specimen book.
                                                    </p>
                                                </div>
                                                <div className="testimonial-footer">
                                                    <h3>Caroline</h3>
                                                    <p>Happy Customer</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Testimonial Slide end */}
                                        {/* Testimonial Slide start */}
                                        <div className="swiper-slide">
                                            <div className="testimonial-slide">
                                                <div className="testimonial-body">
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the
                                                        industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley of type and
                                                        scrambled mak a type specimen book.
                                                    </p>
                                                </div>
                                                <div className="testimonial-footer">
                                                    <h3>Lisa</h3>
                                                    <p>Happy Customer</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Testimonial Slide end */}
                                    </div>
                                    <div className="swiper-pagination">
                                        <div className="swiper-button swiper-button-next" />
                                        <div className="swiper-button swiper-button-prev" />
                                    </div>
                                </div>
                                {/* Testimonial Carousel end */}
                            </div>
                        </div>
                        {/* Testimonial Img start */}
                        <div className="col-lg-6 col-md-5">
                            <div className="testimonial-img">
                                <img src="images/testimonial-img.png" alt="" />
                            </div>
                        </div>
                        {/* Testimonial Img end */}
                    </div>
                </div>
            </div>
            {/* Testimonials Section End */}
        </>

    )
}

export default Testimonials
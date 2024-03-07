import React from 'react'

function Hero(props) {
    return (
        <>
            {/* Page Header Start */}
            <div className="page-header parallaxie">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {/* Page Header Box start */}
                            <div className="page-header-box">
                                <h1 className="text-anime">{props.pageTitle}</h1>
                                <nav>
                                    <ol className="breadcrumb wow fadeInUp" data-wow-delay="0.50s">
                                        <li>
                                            Home
                                        </li>{ ' / ' }
                                        <li className="breadcrumb-item active">{props.pageTitle}</li>
                                    </ol>
                                </nav>
                            </div>
                            {/* Page Header Box end */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Header End */}
        </>

    )
}

export default Hero
import React from 'react'

function Dishes() {
    return (
        <>  {/* Most Popular Dises Start */}
            <div className="most-popular-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {/* Section Title start */}
                            <div className="section-title">
                                <h3 className="wow fadeInUp" data-wow-delay="0.50s">
                                    Hot Dises
                                </h3>
                                <h2 className="text-anime">Most Popular Dises</h2>
                            </div>
                            {/* Section Title end */}
                        </div>
                    </div>
                    <div className="row">
                        {/* Menu Dises Section Start */}
                        <div className="col-lg-3 col-md-12">
                            {/* Sidebar Menu Dises Nav start */}
                            <div className="menu-dises-nav wow fadeInLeft" data-wow-delay="0.75s">
                                <ul>
                                    <li>
                                        <a href="#" className="active-menu-dises" data-filter="*">
                                            <img src="images/icon-breakfast.svg" alt="" />
                                            All Popular Dises
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-filter=".breakfast">
                                            <img src="images/icon-breakfast.svg" alt="" />
                                            Breakfast
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-filter=".lunches">
                                            <img src="images/icon-lunches.svg" alt="" />
                                            Lunches
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-filter=".dinner">
                                            <img src="images/icon-dinner.svg" alt="" />
                                            Dinner
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-filter=".drinks">
                                            <img src="images/icon-drinks.svg" alt="" />
                                            Drinks
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-filter=".fast-foods">
                                            <img src="images/icon-fast-foods.svg" alt="" />
                                            Fast Foods
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-filter=".dessert">
                                            <img src="images/icon-dessert.svg" alt="" />
                                            Dessert
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* Sidebar Menu Dises Nav end */}
                        </div>
                        <div className="col-lg-9 col-md-12">
                            {/* Menu Item Box start */}
                            <div
                                className="row menu-item-boxes wow fadeInUp"
                                data-wow-delay="1.00s"
                            >
                                {/* Menu Item start */}
                                <div className="col-lg-4 col-md-6 menu-item-box lunches dinner fast-foods">
                                    <div className="menu-item">
                                        {/* Menu Item Image start */}
                                        <div className="menu-item-img">
                                            <figure className="image-anime">
                                                <img src="images/menu-1.jpg" alt="" />
                                            </figure>
                                        </div>
                                        {/* Menu Item Image start */}
                                        {/* Menu Item Body start */}
                                        <div className="menu-item-body">
                                            <div className="rating-img">
                                                <img src="images/start-rating.png" alt="" />
                                            </div>
                                            <h3>Grilled Marinated</h3>
                                            <p>
                                                Sit amet, consectetur adipiscing elit maximus velit, non
                                                eleifend.
                                            </p>
                                        </div>
                                        {/* Menu Item Body end */}
                                    </div>
                                </div>
                                {/* Menu Item end */}
                                {/* Menu Item start */}
                                <div className="col-lg-4 col-md-6 menu-item-box breakfast lunches">
                                    <div className="menu-item">
                                        {/* Menu Item Image start */}
                                        <div className="menu-item-img">
                                            <figure className="image-anime">
                                                <img src="images/menu-2.jpg" alt="" />
                                            </figure>
                                        </div>
                                        {/* Menu Item Image start */}
                                        {/* Menu Item Body start */}
                                        <div className="menu-item-body">
                                            <div className="rating-img">
                                                <img src="images/start-rating.png" alt="" />
                                            </div>
                                            <h3>Fried Egg</h3>
                                            <p>
                                                Sit amet, consectetur adipiscing elit maximus velit, non
                                                eleifend.
                                            </p>
                                        </div>
                                        {/* Menu Item Body end */}
                                    </div>
                                </div>
                                {/* Menu Item end */}
                                {/* Menu Item start */}
                                <div className="col-lg-4 col-md-6 menu-item-box dinner fast-foods">
                                    <div className="menu-item">
                                        {/* Menu Item Image start */}
                                        <div className="menu-item-img">
                                            <figure className="image-anime">
                                                <img src="images/menu-3.jpg" alt="" />
                                            </figure>
                                        </div>
                                        {/* Menu Item Image start */}
                                        {/* Menu Item Body start */}
                                        <div className="menu-item-body">
                                            <div className="rating-img">
                                                <img src="images/start-rating.png" alt="" />
                                            </div>
                                            <h3>Sardine Spaghetti</h3>
                                            <p>
                                                Sit amet, consectetur adipiscing elit maximus velit, non
                                                eleifend.
                                            </p>
                                        </div>
                                        {/* Menu Item Body end */}
                                    </div>
                                </div>
                                {/* Menu Item end */}
                                {/* Menu Item start */}
                                <div className="col-lg-4 col-md-6 menu-item-box dessert">
                                    <div className="menu-item">
                                        {/* Menu Item Image start */}
                                        <div className="menu-item-img">
                                            <figure className="image-anime">
                                                <img src="images/menu-4.jpg" alt="" />
                                            </figure>
                                        </div>
                                        {/* Menu Item Image start */}
                                        {/* Menu Item Body start */}
                                        <div className="menu-item-body">
                                            <div className="rating-img">
                                                <img src="images/start-rating.png" alt="" />
                                            </div>
                                            <h3>Ice Waffle</h3>
                                            <p>
                                                Sit amet, consectetur adipiscing elit maximus velit, non
                                                eleifend.
                                            </p>
                                        </div>
                                        {/* Menu Item Body end */}
                                    </div>
                                </div>
                                {/* Menu Item end */}
                                {/* Menu Item start */}
                                <div className="col-lg-4 col-md-6 menu-item-box drinks lunches dinner">
                                    <div className="menu-item">
                                        {/* Menu Item Image start */}
                                        <div className="menu-item-img">
                                            <figure className="image-anime">
                                                <img src="images/menu-5.jpg" alt="" />
                                            </figure>
                                        </div>
                                        {/* Menu Item Image start */}
                                        {/* Menu Item Body start */}
                                        <div className="menu-item-body">
                                            <div className="rating-img">
                                                <img src="images/start-rating.png" alt="" />
                                            </div>
                                            <h3>Egg Omelet</h3>
                                            <p>
                                                Sit amet, consectetur adipiscing elit maximus velit, non
                                                eleifend.
                                            </p>
                                        </div>
                                        {/* Menu Item Body end */}
                                    </div>
                                </div>
                                {/* Menu Item end */}
                                {/* Menu Item start */}
                                <div className="col-lg-4 col-md-6 menu-item-box dinner lunches">
                                    <div className="menu-item">
                                        {/* Menu Item Image start */}
                                        <div className="menu-item-img">
                                            <figure className="image-anime">
                                                <img src="images/menu-6.jpg" alt="" />
                                            </figure>
                                        </div>
                                        {/* Menu Item Image start */}
                                        {/* Menu Item Body start */}
                                        <div className="menu-item-body">
                                            <div className="rating-img">
                                                <img src="images/start-rating.png" alt="" />
                                            </div>
                                            <h3>Gourmet meal</h3>
                                            <p>
                                                Sit amet, consectetur adipiscing elit maximus velit, non
                                                eleifend.
                                            </p>
                                        </div>
                                        {/* Menu Item Body end */}
                                    </div>
                                </div>
                                {/* Menu Item end */}
                            </div>
                            {/* Menu Item Box end */}
                        </div>
                        {/* Menu Dises Section End */}
                    </div>
                </div>
            </div>
            {/* Most Popular Dises End */}
        </>
    )
}

export default Dishes
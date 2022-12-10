import React from 'react'
import './Blogs.css';
import prome from '../../img/hridoy1.png';

const Blogs = () => {
    return (
        <section className="mt-4 pt-4 mb-4 pb-4 container">
            <div className="line">
                <div className="line-container">
                    <h2 className="text-center fs-2 fw-bold blog__title text-dark">Blogs</h2>
                    <div className="lines"></div>
                </div>
            </div>

            <div data-aos="fade-up" className="row">
                <div className="col-md-4">
                    <div className="p-4">
                        <div className="card-container">
                            <div className="imgContainer">
                                <img src={prome} className="blogImg" alt="..." />
                            </div>
                            <div className="body-container">
                                <span className="date">8 May 2021</span>
                                <h5 className="card-title">JavaScript core functionalities</h5>
                                <p className="card-text">Cross browser testing is non functional testing method where you should check your created website, web apps, pages working properly in different browser properly...</p>
                                <div className="b-container">
                                    <a target="_blank" rel="noreferrer" href="https://medium.com/@mdhridoyk0097/javascript-core-functionalities-c650257fbf6e" className="b-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="p-4">
                        <div className="card-container">
                            <div className="imgContainer">
                                <img src={prome} className="blogImg" alt="..." />
                            </div>
                            <div className="body-container">
                                <span className="date">8 May 2021</span>
                                <h5 className="card-title">JavaScript core functionalities part-02</h5>
                                <p className="card-text">In JavaScript, truthy are expressions which evaluates href boolean true value and falsy evaluates href boolean false value.Unlike other languages, true and false values are not limited...</p>
                                <div className="b-container">
                                    <a target="_blank" rel="noreferrer" href="https://medium.com/@mdhridoyk0097/e2b9ee989eda" className="b-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="p-4">
                        <div className="card-container">
                            <div className="imgContainer">
                                <img src={prome} className="blogImg" alt="..." />
                            </div>
                            <div className="body-container">
                                <span className="date">6 May 2021</span>
                                <h5 className="card-title">Javascript Features</h5>
                                <p className="card-text">JavaScript is one of the most popular languages which includes numerous features when it comes to web development. It’s amongst the top programming languages as per Github...</p>
                                <div className="b-container">
                                    <a target="_blank" rel="noreferrer" href="https://medium.com/@mdhridoyk0097/javascript-features-fd5569141ea4" className="b-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card four */}
                <div className="col-md-4">
                    <div className="p-4">
                        <div className="card-container">
                            <div className="imgContainer">
                                <img src={prome} className="blogImg" alt="..." />
                            </div>
                            <div className="body-container">
                                <span className="date">5 May 2021</span>
                                <h5 className="card-title">Understanding JavaScript basic functionalities</h5>
                                <p className="card-text">String is like a Wearhouse where you can shrefre lots of different types of data or text and number also. But it is used href represent text rather than numbers... </p>
                                <div className="b-container">
                                    <a target="_blank" rel="noreferrer" href="https://medium.com/@mdhridoyk0097/understanding-javascript-basic-functionalities-3d67364bbb49" className="b-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card five */}
                <div className="col-md-4">
                    <div className="p-4">
                        <div className="card-container">
                            <div className="imgContainer">
                                <img src={prome} className="blogImg" alt="..." />
                            </div>
                            <div className="body-container">
                                <span className="date">7 May 2021</span>
                                <h5 className="card-title">React basic core concept part-1</h5>
                                <p className="card-text">React Js is a JavaScript library where users can create UI components. It’s not a framework. Frameworks serve a great purpose, especially for young teams and startups.But react is a small library that focuses on just one thing...</p>
                                <div className="b-container">
                                    <a target="_blank" rel="noreferrer" href="https://medium.com/@mdhridoyk0097/react-basic-core-concept-part-1-6e4cb7dab5ee" className="b-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Blogs
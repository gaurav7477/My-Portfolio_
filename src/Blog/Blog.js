import React from 'react';
import "./Blog.css";
import "./Project.css";
import Blog1 from "./img/blog-01.jpg";
import Blog2 from "./img/blog-02.jpg";
import Blog3 from "./img/blog-03.jpg";

function Blog() {
    return (
        <div className="blog component__space" id='Blog'>
            <div className="heading">
                <h1 className="heading">My Blogs</h1>
                <p className='heading p__color'>No Blogs Yet. New Blogs will be coming soon !</p>
            </div>
            <div className="container">
                <div className="row">

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Blog1} alt="Project-1-img" className='project__img' />
                                </div>
                                <div className="mask__effect"> </div>
                            </div>
                            <div className="blog__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Lorem ipsum dolor sit amet.</h4>
                                <a href="#link1" className='blog project__btn'>Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Blog2} alt="Project-1-img" className='project__img' />
                                </div>
                                <div className="mask__effect"> </div>
                            </div>
                            <div className="blog__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Lorem ipsum dolor sit amet.</h4>
                                <a href="#link1" className='blog project__btn'>Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Blog3} alt="Project-1-img" className='project__img' />
                                </div>
                                <div className="mask__effect"> </div>
                            </div>
                            <div className="blog__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Lorem ipsum dolor sit amet.</h4>
                                <a href="#link1" className='blog project__btn'>Read More</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blog;
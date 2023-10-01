import React from 'react';
import "./Services.css";

function Services() {
    return (
        <div className="services component__space" id='Services'>
            <div className="heading">
                <h1 className="heading">My Awesome Services</h1>
                <p className='heading p__color'>This is the list of services that I Provide</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="icon">
                                <svg className='service__svg' stroke="#f9004d" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line></svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Frontend Development</h1>
                                <p className="service__text p p__color">I provide front end website development service in HTML, CSS, JS and ReactJS</p>

                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="icon">
                                <svg className='service__svg' stroke="#f9004d" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Backend Development</h1>
                                <p className="service__text p p__color">I provide back end  development service in NodeJS, ExpressJS, MongoDB & MySQL.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="icon">
                                <svg className='service__svg' stroke="#f9004d" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">CP-DSA Help</h1>
                                <p className="service__text p p__color">Ask me about DSA/CP Problems.I love to help and contribute in every possible way.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services 
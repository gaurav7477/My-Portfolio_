import React from 'react';
import "./Project.css";
import Project1 from "../img/portfolio Image.png";
import Project2 from "../img/pizzahub.png";
import Project3 from "../img/mi-clone.png";
import Project4 from "../img/weather.png";
import Project5 from "../img/todo.png";

function Project() {
    return (
        <div className="project component__space" id='Project'>
            <div className="heading">
                <h1 className="heading">My Latest Projects</h1>
                <p className='heading p__color'>This is the list of Projects that I made or worked on</p>
            </div>
            <div className="container">
                <div className="row">

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project1} alt="Project-1-img" className='project__img' />
                                </div>
                                <div className="mask__effect"> </div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">My Portfolio</h5>
                                <h4 className="project__text">Portfolio website in ReactJS</h4>
                                <a href="#link1" className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project2} alt="Project-1-img" className='project__img' />
                                </div>
                                <div className="mask__effect"> </div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">PizzaHub website</h5>
                                <h4 className="project__text">Food website using React,Sanity,Stripe</h4>
                                <a href="https://another-food-website.vercel.app/" className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project4} alt="Project-1-img" className='project__img' />
                                </div>
                                <div className="mask__effect"> </div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Weather Info</h5>
                                <h4 className="project__text">Weather App search through cities</h4>
                                <a href="https://gaurav7477.github.io/WeatherInformation/" className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project5} alt="Project-1-img" className='project__img' />
                                </div>
                                <div className="mask__effect"> </div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">ToDo-App</h5>
                                <h4 className="project__text">for scheduling task</h4>
                                <a href="https://grub-todo-i9ei.onrender.com/login" className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} alt="Project-1-img" className='project__img' />
                                </div>
                                <div className="mask__effect"> </div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Mi-Clone-store</h5>
                                <h4 className="project__text">Using ReactJS</h4>
                                <a href="https://mi-store-clone-eta.vercel.app/" className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Project;
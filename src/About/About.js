import React from 'react';
import "./About.css";
import aboutImg from "../img/20230810_223703.jpg"

function About() {
    // up to top btn
    window.addEventListener("scroll", function () {
        const upToTop = document.querySelector("a.bottom__to__top");
        upToTop.classList.toggle("active", window.scrollY > 0);
    });

    return (
        <div className="about component__space" id='About'>
            <div className="container">
                <div className="row">
                    <div className="col__2">
                        <img src={aboutImg} alt="my_img" className="about__img" />
                    </div>
                    <div className="col__2">
                        <h1 className="about__heading">  About Me  </h1>
                        <div className="about__meta">
                            <p className="about__text p__color">
                                Hey! My name is Gaurav Bairagi and Tech enthusiast with a love for reading. I am currently a sophomore at IIIT Bhopal pursuing B.tech degree in Computer Science and Engineering.
                            </p>
                            <p className="about__text p__color">
                                I am an aspiring Full Stack Web Developer and also exploring the feild of Competitive Programming. I am currently learning MERN Stack Development and Data Structures and Algorithms. I have good communication and interpersonal skills. Passionate in collaborating with new people and brainstorming on topics of mutual interest.
                            </p>
                            <p className="about__text p__color">
                                Experience in being in-charge of various inter/intra school projects and held positions of responsibility as a House Captain, which instilled necessary skills to act as a better team leader and a team player.
                            </p>
                            <div className="about__button d__flex align__items__center">
                                <a href="https://drive.google.com/file/d/1hkddkb_ocT3k_pvJv068QsFCczX9m9za/view?usp=sharing"><button className="about btn pointer">Download CV</button></a>
                                <a href="#Contact"><button className="about btn pointer">Hire Me</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="up__to__top__btn">
                <a href="#Home" className='bottom__to__top'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up white" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default About